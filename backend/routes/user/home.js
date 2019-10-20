var express = require('express'),
    boom = require('boom'),
    passport = require('passport'),
    userInvestmentGroupModel = require('../../models').UserInvestmentGroup,
    userPropertyInvestmentModel = require('../../models').UserPropertyInvestment,
    propertyModel = require('../../models').Property,
    userProfileModel = require('../../models').UserProfile,
    router = express.Router();

router.get('/', async(req, res, next) => {
    try {


        const userProfile = await userProfileModel.findOne();
        const properties = await propertyModel.findAll({
            order: [['id', 'ASC']]
        });
        let totalPropertyValue = 0;
        let totalRentRevenue = 0;
        for(let property of properties) {
            totalPropertyValue += Number(property.totalAmount)
            totalRentRevenue += Number(property.estimationRent)
        }

        const userInvestmentGroups = await userInvestmentGroupModel.findAll({
            where: {
                status: 'C'
            }
        });

        let totalInvestAmount = 0;
        let amountPercentage = 0;
        if(userInvestmentGroups.length > 0) {
            for(let userInvestmentGroup of userInvestmentGroups) {

                amountPercentage += Number(userInvestmentGroup.amountPercentage)
                totalInvestAmount += Number(userInvestmentGroup.amount)
            }
        }
        let totalExpectedRevenue = Number(totalRentRevenue * (amountPercentage / 100) * 12).toFixed(2)

        let propertiesArray = [];

        for(let property of properties) {
            let userInvestProperties = await userPropertyInvestmentModel.findAll({
                where: {
                    propertyId: property.id
                }
            });
            let totalPercantage = 0;
            for(let userInvestProperty of userInvestProperties) {
                totalPercantage += Number(userInvestProperty.amountPercentage)
            }
            propertiesArray.push({
                id: property.id,
                title: property.title,
                value: property.totalAmount,
                estimationRent: property.estimationRent,
                expectedReturn: Number(((property.estimationRent * totalPercantage) / 100) * 12).toFixed(2)
            })
        }

        return res.json({
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            totalPropertyValue: Number(totalPropertyValue).toFixed(2),
            totalRentRevenue: Number(totalRentRevenue).toFixed(2),
            totalExpectedRevenue: Number(totalExpectedRevenue).toFixed(2),
            totalGrossProfit: 0,
            totalNetProfit: 0,
            totalRoi: Number((totalExpectedRevenue / totalInvestAmount) * 100).toFixed(2),
            totalInvest: totalInvestAmount,
            totalInvestPercentage: (amountPercentage).toFixed(2),
            properties: propertiesArray,
            userInvestmentGroups: userInvestmentGroups
        })
    }
    catch(err) {
        return next(boom.badImplementation(err));
    }
});

router.get('/properties', async(req, res, next) => {
    try {
        let propertyArray = [];
        const properties = await propertyModel.findAll();
        for(let property of properties) {
            propertyArray.push({
                title: property.title,
                total: property.totalAmount,
                estimationRent: property.estimationRent,
                
            })
        }

        return res.json({
            properties: properties
        })
    } catch(err) {
        return next(boom.badImplementation(err));
    }
});


router.get('/hash/:id', async(req, res, next) => {
    const userInvestmentGroup = await userInvestmentGroupModel.findOne({
        where: {
            status: 'C',
            id: req.params.id
        }
    });

    return res.json({
        hash: userInvestmentGroup.hash
    })
});
      

module.exports = router;