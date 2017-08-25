const router = require('express').Router();
const user = require('../models/user.model');
const jwt = require('jsonwebtoken');
const requiresAuth = require('../lib/requiresAuth');

module.exports = function (passport) {

     
    router.post('/user', login);

    return router;


    function login(req, res, next) {
        console.log(req.body);
        let promiseA = user
            .findOne({ employeeId: req.body.employeeId })
            .exec();
        let promiseB = promiseA.then(user => user.comparePassword(req.body.password));

        Promise
            .all([promiseA, promiseB])
            .then(([user, isMatch]) => {
                if (isMatch) {
                    res.json({
                        token: jwt.sign({
                            sub: user._id
                        }, process.env.AUTHKEY, {expiresIn: '365 days'})
                    });
                } else {
                    res
                        .status(400)
                        .json({errors: ['Email or password incorrect']});
                }
            })
            .catch(next);
    }

}
