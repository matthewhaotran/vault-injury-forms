const router = require('express').Router();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const requiresAuth = require('../lib/requiresAuth');

module.exports = function (passport) {

    router.post('/register', register);  //register is not needed and can be commented out 
    router.post('/userLogin', login);
    router.get('/vaultir/:id', (req, res) => {
        User.findOne({ 'ssn': req.params.id }, 'firstName lastName address1 address2 city state zip mobilePhone homePhone workPhone acronym OTHERACRONYM1 ssn employeeId ERIncidentDate ERincidentNumber ERfirstName ERlastName ERaddress1 ERcity ERstate ERzip ERincidentDate ERincidentNumber ERhomePhone ERemployerPhone ERemployerDept EPE1firstName EPE1lastName EPE1employerDept EPE1unitNumber EPE1employerPhone EPE2firstName EPE2lastName EPE2employerDept EPE2unitNumber EPE2employerPhone EPE3firstName EPE3lastName EPE3employerDept EPE3unitNumber EPE3employerPhone exposedTo OTHEREXPOSEDTO1 levelOfExposure explanation requestedBy noDisease ERemployeeNotified ERemployeeNotifiedName DOnotified DOnotifiedName dateOfNotification nameTitle signature', function (err, emergencyResponseEmployeeReport) {
            res.json(emergencyResponseEmployeeReport);
        })
    });

    router.get('/vaultir/employeeId/:id', (req, res) => {
        User.findOne({ 'employeeId': req.params.id }, 'firstName lastName address1 address2 city state zip mobilePhone homePhone workPhone acronym OTHERACRONYM1 ssn employeeId ERIncidentDate ERincidentNumber ERfirstName ERlastName ERaddress1 ERcity ERstate ERzip ERincidentDate ERincidentNumber ERhomePhone ERemployerPhone ERemployerDept EPE1firstName EPE1lastName EPE1employerDept EPE1unitNumber EPE1employerPhone EPE2firstName EPE2lastName EPE2employerDept EPE2unitNumber EPE2employerPhone EPE3firstName EPE3lastName EPE3employerDept EPE3unitNumber EPE3employerPhone exposedTo OTHEREXPOSEDTO1 levelOfExposure explanation requestedBy noDisease ERemployeeNotified ERemployeeNotifiedName DOnotified DOnotifiedName dateOfNotification nameTitle signature', function (err, emergencyResponseEmployeeReport) {
            res.json(emergencyResponseEmployeeReport);
        })
    });

    return router;

    //the register function below can be commented out or removed if not needed later
    function register(req, res, next) {
        if (!req.body.firstName ) {
            res
                .status(400)
                .json({errors: ['Please enter all required fields']});
        } else {
            const newUser = new User(req.body);

            newUser
                .save()
                .then(() => res.json({message: 'Successfully registered new user'}))
                .catch(err => {
                    if (err.code && err.code === 11000) {
                        res
                            .status(400)
                            .send({'errors': ['Email already registered']});
                    } else {
                        next(err);
                    }
                });
        }
    }

    function login(req, res, next) {
        let promiseA = User
            .findOne({email: req.body.email})
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