const router = require('express').Router();
const acknowledgementForm = require('../models/acknowledgementForm.model');

module.exports=function (passport){
    router.get('/vaultir',requiresAuth(), (req, res) => {
        acknowledgementForm.find(function(err, acknowledgementForm) {
            res.json(acknowledgementForm);
        });
    });
    
    router.get('/vaultir/:id',requiresAuth(), (req, res) => {
        acknowledgementForm.findOne({ 'ssn': '123456789' }, 'firstName lastName address1 address2 city state zip mobilePhone homePhone workPhone ssn employeeId ERfirstName ERlastName ERaddress1 ERaddress2 ERcity ERstate ERzip incidentDate incidentNumber ERhomePhone ERemployerPhone ERemployerDept EPE1firstName EPE1lastName EPE1emplyerDept EPE1unitNumber EPE1employerPhone EPE3employerPhone EPE2unitNumber EPE3unitNumber EPE2employerDept EPE3 employerDept EPE2firstName EPE2lastName EPE3firstName EPE3lastName exposedTo levelOfExposure', function (err, acknowledgementForm) {
            res.json(acknowledgementForm);
        })
    });
    
    router.post('/vaultir',requiresAuth(), (req, res) => {
        const newacknowledgementForm = new acknowledgementForm(req.body);
        console.log('posted!')
    
        newacknowledgementForm.save(function(err) {
            if(err) {
                res.send('an error has occured: ' + err)
            } else {
                res.send('ok')
            }
        }); 
    });
    
    router.delete('/vaultir/:id',requiresAuth(), (req, res) => {
        console.log(req.params.id);
        newacknowledgementForm.remove({_id: req.params.id}, (err) => {
            if (err) {
                return console.log(err);
            } else {
                res.send('ok');
            }
        });
    });
    
    return router;
    
};

