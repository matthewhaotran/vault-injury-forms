const router = require('express').Router();
const initialReportForm = require('../models/initialReportForm.model');
const requiresAuth = require('../lib/requiresAuth');

module.exports=function (passport) {
    router.get('/vaultir',(req, res) => {
        initialReportForm.find(function(err, initialReportForm) {
            res.json(initialReportForm);
        });
    });
    
    router.get('/vaultir/:id', (req, res) => {
        initialReportForm.findOne({  'ssn': req.params.id }, 'claimNumber alternateClaimNumber occurrenceNumber location location2 dateOfLoss dateReported timeOfLoss covgCode reportType claimantId idType employeeId firstName lastName middleName address1 address2 city state zip country mailingCheckbox mailingStreetAddress1 mailingStreetAddress2 mailingCity mailingState mailingZip mailingCountry ssn homePhone personalEmail mobilePhone workPhone workEmail dateOfBirth maritalStatus gender lossCause lossType bodyPart accidentState stateOfJurisdiction accidentLocation driversLicenseNum driversLicenseState initialMedicalTreatme department cause division businessLocation jobTitle lostTime dateLastWorked returnedToWork returnedLightDuty returnedFullTimeDate employeeDied dateReported salaryContinued wagesPaidDayInjured employment hireDate rateOfPay payType jobCode jobTitle firstReportCorrection fullDenial finalPaymentBodyPartCode1 percentBodyPartCode1 finalPaymentBodyPartCode2 percentBodyPartCode2 finalPaymentBodyPartCode3 percentBodyPartCode3 finalPaymentBodyPartCode4 percentBodyPartCode4 wholePerson percentWholePerson completedByTitle completedByName completedByPhone', function (err, initialReportForm) {
            res.json(initialReportForm);
        })
    });
    
    router.post('/vaultir', (req, res) => {
        const newinitialReportForm = new initialReportForm(req.body);
        console.log('posted!')
    
        newinitialReportForm.save(function(err) {
            if(err) {
                res.send('an error has occured: ' + err)
            } else {
                res.send('ok')
            }
        }); 
    });
    
    router.delete('/vaultir/:id', (req, res) => {
        console.log(req.params.id);
        newinitialReportForm.remove({_id: req.params.id}, (err) => {
            if (err) {
                return console.log(err);
            } else {
                res.send('ok');
            }
        });
    });
    
    return router;
     
};

