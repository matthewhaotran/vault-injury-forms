const router = require('express').Router();

/* ADD YOUR ROUTES HERE */


// closure / currying
module.exports = function (passport) {
    
    router.use('/users', require('./users.route')(passport));
    router.use('/userLogin', require('./userLogin.route')(passport));
    router.use('/emergencyResponseEmployeeReport', require('./emergencyResponseEmployeeReport.route')(passport));
    router.use('/initialReportForm', require('./initialReportForm.route')(passport));
    router.use('/kaiserOnTheJob', require('./kaiserOnTheJob.route')(passport));
    router.use('/accidentForm', require('./accidentForm.route')(passport));
    router.use('/cosumnesReturnToWork', require('./cosumnesReturnToWork.route'));

    return router;
};
