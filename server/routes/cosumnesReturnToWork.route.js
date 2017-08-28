const router = require('express').Router();
const cosumnesReturnToWork = require('../models/cosumnesReturnToWork.model');
const requiresAuth = require('../lib/requiresAuth');

router.get('/vaultir', (req, res) => {
    cosumnesReturnToWork.find(function(err, cosumnesReturnToWork) {
        res.json(cosumnesReturnToWork);
    });
});

router.get('/vaultir/:id', (req, res) => {
    cosumnesReturnToWork.findOne({ 'ssn': req.params.id }, 'firstName lastName address1 address2 city state zip mobilePhone homePhone workPhone ssn physicianName physicianAddress dateSigned q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 detailRestriction q16', function (err, cosumnesReturnToWork) {
        res.json(cosumnesReturnToWork);
    })
});

router.post('/vaultir', (req, res) => {
    const newCosumnesReturnToWork = new cosumnesReturnToWork(req.body);
    newCosumnesReturnToWork.save(function(err) {
        if(err) {
            res.send('an error has occured: ' + err)
        } else {
            res.send('ok')
        }
    }); 
});

router.delete('/vaultir/:id', (req, res) => {
    console.log(req.params.id);
    CosumnesReturnToWork.remove({_id: req.params.id}, (err) => {
        if (err) {
            return console.log(err);
        } else {
            res.send('ok');
        }
    });
});


module.exports = router;
