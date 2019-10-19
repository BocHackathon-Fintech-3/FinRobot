var express = require('express'),
    boom = require('boom'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    sequelize = require("../../models").sequelize,
    userModel = require('../../models').User,
    userProfileModel = require('../../models').UserProfile,
    router = express.Router();

var generateJWT = (id) => {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 3); // expire in 3 days  

    var token = jwt.sign({
        id: id, 
        exp: parseInt(exp.getTime() / 1000)
    }, process.env.JWT_SECRET);   
    return token
}

router.post('/login', async(req, res, next) => {
    try {
        if(!(req.body.email && req.body.password))
            return next(boom.badRequest(`Email and Password field must not be blank. Please try again`))

        const user = await userModel.findOne({
            where: {
                email: req.body.email
            }
        });

        if(!user)
            return next(boom.badRequest(`The Email or Password you entered is not valid`))

        const validPassword = await bcrypt.compare(req.body.password, user.password);
         if(!validPassword)
            return next(boom.badRequest(`The Email or Password you entered is not valid`))

        const userProfile = await userProfileModel.findOne();
        
        return res.json({
            token: generateJWT(user.id), 
            admin: {
                email: user.email,
                fullName:  `${userProfile.firstName} ${userProfile.lastName}`
            }
        });  
    }
    catch(err) {
        return next(boom.badImplementation(err));
    }
});



router.post('/register', async(req, res, next) => {
    try {
        const userExist = await userModel.findOne({
            where: {
                email: req.body.email
            }
        });

        if(userExist)
            return next(boom.badRequest(`User with this email is already exist`))

        const salt = await bcrypt.genSalt(parseInt(process.env.SALTROUNDS));
        const hash = await bcrypt.hash(req.body.password, salt);
        const conn = await sequelize.transaction({autocommit: false})
        try {
            const refennceNo = await generalLib.getNextSequence(`CUS`, conn);
            const newUser = await userModel.create({
                email: req.body.email,
                password: hash
            },{transaction: conn});
            
            await userProfileModel.create({
                refennceNo: refennceNo,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                countryId: req.body.countryId,
                dateOfBirth: req.body.dateOfBirth,
                city: req.body.city,
                addressLine1: req.body.addressLine1,
                addressLine2: req.body.addressLine2,
                postalCode: req.body.postalCode,
                phoneNumber: req.body.phoneNumber
            },{transaction: conn})
            await conn.commit();

            return res.json({
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    token: generateJWT(newUser.id),
                    verified: 1
                }
            })
        }
        catch(err) {
            conn.rollback();
            throw err;
        }
    }
    catch(err) {
        return next(boom.badImplementation(err));
    }
})



module.exports = router;
