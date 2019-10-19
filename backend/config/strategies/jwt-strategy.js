const passport = require('passport'),
      passportJWT = require("passport-jwt"),
      boom = require('boom'),
      userModel = require('../../models').User,
      adminModel = require('../../models').Admin;

    var ExtractJwt = passportJWT.ExtractJwt,
        JwtStrategy = passportJWT.Strategy;

module.exports = () => {
    
    passport.use('jwt-unverified-user', new JwtStrategy({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:process.env.JWT_SECRET,
    },(jwt_payload, next) => {
        return userModel.findByPk(jwt_payload.id, {
            attributes : ['id', 'email']
        }).then((user) => {

            return next(null, user);
            
        }).catch((err) => {
            return next("User not found", false);
        });
    }));
    
    
    passport.use('jwt-user',new JwtStrategy({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:process.env.JWT_SECRET,
    },(jwt_payload, next) => {
        console.log(jwt_payload)
        return new Promise((resolve, reject) => {
            return userModel.findByPk(jwt_payload.id, {
                attributes : ['id', 'email','verified']
            }).then((user) => {
                resolve(user)
            }).catch((err) => {
                reject(err)
            })
        }).then((user) => {
            if(!user.verified)
                next("user is not verified", null)
            
            next(null, user);
        }).catch((err) => {
            next("User not found", false);
        })

    }));
    
    passport.use('jwt-admin',new JwtStrategy({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:process.env.JWT_SECRET,
    },(jwt_payload, next) => {
        return new Promise((resolve, reject) => {
            return adminModel.findByPk(jwt_payload.id, {
                attributes : ["id", "isActive"]
            }).then((admin) => {
                resolve(admin);
            }).catch((err) => {
                reject(err);        
            });
        }).then((admin) => {
            if(!admin.isActive)
                return next("Admin user is not active", null)
            
            return next(null, admin);
        }).catch((err) => {
            return next(boom.badImplementation("Admin user not found"), false);
        })
    }));
};