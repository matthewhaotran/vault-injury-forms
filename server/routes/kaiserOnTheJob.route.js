const router = require('express').Router();
const kaiserOnTheJob = require('../models/kaiserOnTheJob.model');
const requiresAuth = require('../lib/requiresAuth');

module.exports=function (passport) {
    router.get('/vaultir',requiresAuth(), (req, res) => {
        kaiserOnTheJob.find(function(err, kaiserOnTheJob) {
            res.json(kaiserOnTheJob);
        });
    });
    
    router.get('/vaultir/:id', (req, res) => {
        kaiserOnTheJob.findOne({  'ssn': req.params.id }, 'date kaiserDoi employeeName employerContactPerson employer employersInsuranceCarrier attachedCheckbox onFileCheckbox contactNameTitle contactPhone contactFax timeStart timeEnd', function (err, kaiserOnTheJob) {
            res.json(kaiserOnTheJob);
        })
    });
    
    router.post('/vaultir', requiresAuth(),(req, res) => {
        const newkaiserOnTheJob = new kaiserOnTheJob(req.body);
        console.log('posted!')
    
        newkaiserOnTheJob.save(function(err) {
            if(err) {
                res.send('an error has occured: ' + err)
            } else {
                res.send('ok')
            }
        }); 
    });
    
    router.delete('/vaultir/:id',requiresAuth(), (req, res) => {
        console.log(req.params.id);
        newkaiserOnTheJob.remove({_id: req.params.id}, (err) => {
            if (err) {
                return console.log(err);
            } else {
                res.send('ok');
            }
        });
    });
    
    
    return router;
};

