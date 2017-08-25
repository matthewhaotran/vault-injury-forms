
// new stuff

const {Strategy, ExtractJwt} = require('passport-jwt');
const User = require('../models/user.model');
const _ = require('lodash');

module.exports = function initalizationPassport(passport) {
    function getUserFromJWT(jwtPayload, done) {
        User
            .findById(jwtPayload.sub)
            .exec()
            .then(user => {
                console.log(user.email);
                done(null, user)
            })
            .catch(err => done(err));
    }

    const strategy = new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.AUTHKEY,
    }, getUserFromJWT);

    
    passport.use(strategy);
};