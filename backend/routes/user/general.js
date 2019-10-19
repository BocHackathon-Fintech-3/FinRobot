var express = require('express'),
    boom = require('boom'),
    passport = require('passport'),
    userPropertyInvestmentModel = require('../../models').userPropertyInvestment,
    userProfileModel = require('../../models').UserProfile,
    router = express.Router();

router.get('/user/invest/details', passport.authenticate('jwt-user'), async(req, res, next) => {
    try {
        const userPropertyInvestments = await userPropertyInvestmentModel.findAll({
            where: {
                status: 'C'
            }
        });
        let balance = 0;
        if(userPropertyInvestments.length > 0) {
            for(let userPropertyInvestment of userPropertyInvestments) {
                balance += userPropertyInvestment.amount
            }
        }

        return res.json({
            balance: balance,
            propertyInvests: userPropertyInvestments.length
        })
    }
    catch(err) {
        return next(boom.badImplementation(err));
    }
});

router.get('/user/profile/details', passport.authenticate('jwt-user'), async(req, res, next) => {
    try {
        const userProfile = await userProfileModel.findOne({
            where: {
                userId: req.user.id
            }
        });

        return res.json({
            userProfile: userProfile
        })
    }
    catch(err) {
        return next(boom.badImplementation(err));
    }
});




module.exports = router;