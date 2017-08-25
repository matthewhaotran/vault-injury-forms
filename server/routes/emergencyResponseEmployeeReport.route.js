const router = require('express').Router();
const emergencyResponseEmployeeReport = require('../models/emergencyResponseEmployeeReport.model');
const requiresAuth = require('../lib/requiresAuth');

module.exports=function (passport) {
    router.get('/vaultir',requiresAuth(), (req, res) => {
        emergencyResponseEmployeeReport.find(function(err, emergencyResponseEmployeeReport) {
            res.json(emergencyResponseEmployeeReport);
        });
    });
    
    router.get('/vaultir/:id',requiresAuth(), (req, res) => {
        emergencyResponseEmployeeReport.findOne({ 'ssn': req.params.id }, 'firstName lastName address1 address2 city state zip mobilePhone homePhone workPhone acronym OTHERACRONYM1 ssn employeeId ERIncidentDate ERincidentNumber ERfirstName ERlastName ERaddress1 ERcity ERstate ERzip ERincidentDate ERincidentNumber ERhomePhone ERemployerPhone ERemployerDept EPE1firstName EPE1lastName EPE1employerDept EPE1unitNumber EPE1employerPhone EPE2firstName EPE2lastName EPE2employerDept EPE2unitNumber EPE2employerPhone EPE3firstName EPE3lastName EPE3employerDept EPE3unitNumber EPE3employerPhone exposedTo OTHEREXPOSEDTO1 levelOfExposure explanation requestedBy noDisease ERemployeeNotified ERemployeeNotifiedName DOnotified DOnotifiedName dateOfNotification nameTitle signature', function (err, emergencyResponseEmployeeReport) {
            res.json(emergencyResponseEmployeeReport);
        })
    });
    
    router.post('/vaultir',requiresAuth(), (req, res) => {
        const newemergencyResponseEmployeeReport = new emergencyResponseEmployeeReport(req.body);
        console.log('posted!')
    
        newemergencyResponseEmployeeReport.save(function(err) {
            if(err) {
                res.send('an error has occured: ' + err)
            } else {
                res.send('ok')
            }
        }); 
    });
    
    router.delete('/vaultir/:id',requiresAuth(), (req, res) => {
        console.log(req.params.id);
        newemergencyResponseEmployeeReport.remove({_id: req.params.id}, (err) => {
            if (err) {
                return console.log(err);
            } else {
                res.send('ok');
            }
        });
    });
    
    return router;
    
    
};

