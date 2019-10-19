var express = require('express'),
    boom = require('boom'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    userInvestmentGroupModel = require('../../models').UserInvestmentGroup,
    userPropertyInvestmentModel = require('../../models').UserPropertyInvestment,
    propertyModel = require('../../models').Property,
    generalLib = require('../../services/generalLib'),
    router = express.Router();

const Web3 = require('web3'),
    EthereumTx = require('ethereumjs-tx'),
    braintree = require('braintree');

const propertyInvestmentsABI = require('../../services/abi/propertyInvestments.json'),
      web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_ENDPOINT)),
      investContractAddress = process.env.INVESTCONTRACT,
      publicAddress = process.env.PUBLICADDRESS,
      privateKey = process.env.PRIVATEKEY;


router.get('/user/portofolio', passport.authenticate('jwt-user'), async(req, res, next) => {
    try {
        const userPropertyInvestments = await userPropertyInvestmentModel.findAll({
            where: {
                userId: req.user.id,
                status: 'A'
            },
            include: [{
                model: propertyModel,
                required: true
            }]
        });
        
        return userPropertyInvestments

    } catch(err) {
        return next(boom.badImplementation(err));
    }
});

router.post('/investproperties', async(req, res, next) => {
    try {
        let purchaseOrderNumber = null;
        let status = 'C';

        const properties = await propertyModel.findAll();
            // var gateway = braintree.connect({
            //     environment: braintree.Environment.Sandbox,
            //     merchantId: process.env.MERCHANT_ID,
            //     publicKey: process.env.BRAINTREE_PUBLIC_KEY,
            //     privateKey: process.env.BRAIN_TREE_PRIVATE_KEY
            // });
            // const brainTreeResult = await gateway.transaction.sale({
            //     amount: req.body.amount,
            //     paymentMethodNonce: req.body.paymentMethodNonce,
            //     options: {
            //         submitForSettlement: false
            //     }
            // });
            // purchaseOrderNumber = brainTreeResult.transaction.id
        let totalPortfolio = 0;
        let userPortfolio = [];
        for(property of properties) {
            totalPortfolio += Number(property.totalAmount)
        }
        const amountFee = 0;
        const amount = req.body.amount - amountFee
        const refennceNo = await generalLib.getNextSequence(`INV`);
        const userInvestmentGroup = await userInvestmentGroupModel.create({
            userId: 1,
            referenceNo: refennceNo,
            amount: amount,
            amounFee: amountFee,
            paymentType: 'C', 
            purchaseOrderNumber: purchaseOrderNumber,
            amountPercentage: (amount / totalPortfolio * 100).toFixed(2),
            status: status
        });
        for(property of properties) {
            let propertyInvestPercentage = Number(property.totalAmount / totalPortfolio * 100).toFixed(2)
            userPropertyInvestment = await userPropertyInvestmentModel.create({
                userId: 1,
                propertyId: property.id,
                investmentGroupId: userInvestmentGroup.id,
                amount: (amount  * propertyInvestPercentage) / 100,
                amountPercentage: ((((amount  * propertyInvestPercentage) / 100) / property.totalAmount) * 100).toFixed(2)
            })

            userPortfolio.push({
                id: property.id,
                amount: (amount  * propertyInvestPercentage) / 100
            })
        }

        const hash = await sendToken(1, userInvestmentGroup.id, userPortfolio)
        await userInvestmentGroupModel.update({
            hash: hash
        },{
            where: {
                id: userInvestmentGroup.id
            }
        });
        return {
            userInvestmentGroup: userInvestmentGroup.id,
            hash: hash
        }

    } catch(err) {
        return next(boom.badImplementation(err));
    }
});

router.get('/investproperty/:investmentGroupId', passport.authenticate('jwt-user'), async(req, res, next) => {
    try {

        const userInvestmentGroup = await userInvestmentGroupModel.findOne({
            where: {
                id: investmentGroupId,
                userId: req.user.id,
            }
        })

        const userPropertyInvestments = await userPropertyInvestmentModel.findAll({
            where: {
                userId: req.user.id,
                investmentGroupId: req.params.investmentGroupId
            },
            include: [{
                model: propertyModel,
                required: true
            }]
        })

        return res.json({
            hash: userInvestmentGroup.hash,
            userPropertyInvestments: userPropertyInvestments
        })

    } catch(err) {
        return next(boom.badImplementation(err));
    }
});

const sendToken = async(userId, propertyInvestmenGrouptId, properties) => {
    let propertyV1Id = null;
    let propertyV2Id = null;
    let propertyV3Id = null;
    let propertyV4Id = null;
    let propertyV1Amount = null;
    let propertyV2Amount = null;
    let propertyV3Amount = null;
    let propertyV4Amount = null;


    if(properties.length > 0) {
        if(properties.length == 1) {
            propertyV1Id = properties[0].id;
            propertyV1Amount = properties[0].amount
        }
        if(properties.length == 2) {
            propertyV2Id = properties[1].id;
            propertyV2Amount = properties[1].amount
        }
        if(properties.length == 3) {
            propertyV3Id = properties[2].id;
            propertyV3Amount = properties[2].amount
        }
        if(properties.length == 4) {
            propertyV4Id = properties[3].id;
            propertyV4Amount = properties[3].amount
        }
    }

    const countVal = await web3.eth.getTransactionCount(publicAddress.toLowerCase());
    const investContract = new web3.eth.Contract(propertyInvestmentsABI, investContractAddress.toLowerCase());
    var privKey = new Buffer(privateKey.toLowerCase().replace('0x', ''), 'hex');
    var tx = new EthereumTx({
        from: publicAddress,
        to: investContractAddress,
        nonce: countVal,
        gasPrice: web3.utils.toHex(1000000000),
        gasLimit: web3.utils.toHex(90000),
        value: "0x0",
        data: investContract.methods.createPropertyInvestment(
            propertyInvestmentId, 
            userId, 
            propertyV1Id,
            propertyV1Amount,
            propertyV2Id,
            propertyV2Amount,
            propertyV3Id,
            propertyV3Amount,
            propertyV4Id,
            propertyV4Amount
        ).encodeABI()
    })
    tx.sign(privKey);
    var serializedTx = tx.serialize();
    const hash = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));

    return hash;
}


module.exports = router;


