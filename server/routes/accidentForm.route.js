const router = require('express').Router();
const  accidentForm = require('../models/accidentForm.model');
const requiresAuth = require('../lib/requiresAuth');

module.exports=function (passport){
    router.get('/vaultir',(req, res) => {
        res.json(req.user);
    //     accidentForm.find(function(err,  accidentForm) {
    //        res.json( accidentForm);
    //    });
   });
   
   router.get('/vaultir/:id', (req, res) => {
        accidentForm.findOne({ 'ssn': req.params.id }, 'firstName lastName address1 address2 city state zip mobilePhone homePhone workPhone ssn locationfOfIncident department division position supervisor dateOfIncident timeOfIncident locationOfIncidentAddress1 locationOfIncidentAddress2 locationOfIncidentCity locationOfIncidentState locationOfIncidentZip policeInvolved policeInvolvedInfo photosTaken paramedicsCalled injuredEmployees natureInjury injuryDetail witness vehicleTypeUnitNumber damageAmount otherVehicleMake otherVehicleModel otherVehicleYear otherVehicleLicensePlate policeDriverTicketed policeDriverInformation', function (err,  accidentForm) {
           res.json( accidentForm);
       })
   });
   
   router.post('/vaultir', (req, res) => {
       const newaccidentForm = new  accidentForm(req.body);
       console.log('posted!')
   
       newaccidentForm.save(function(err) {
           if(err) {
               res.send('an error has occured: ' + err)
           } else {
               res.send('ok')
           }
       }); 
   });
   
   router.delete('/vaultir/:id', (req, res) => {
       console.log(req.params.id);
       new accidentForm.remove({_id: req.params.id}, (err) => {
           if (err) {
               return console.log(err);
           } else {
               res.send('ok');
           }
       });
   });

   return router;
};






