(function () {
    'use strict';

    angular
        .module('app.accidentForm')
        .controller('accidentFormConfirmationController', accidentFormConfirmationController)

    accidentFormConfirmationController.$inject = ['accidentFormFactory', '$stateParams','$state'];

    function accidentFormConfirmationController(accidentFormFactory, $stateParams, $state) {
        var vm = this;
        vm.saveForm = saveForm;

        activate();

        function activate() {
            accidentFormFactory
                .getUser($stateParams.id)
                .then(function (accidentForm) {
                    vm.accidentForm = accidentForm;
                });
        }

        function saveForm(accidentForm) {
            var doc = new jsPDF();
            var myImage = new Image();
            myImage.src = 'images/accidentForm-1.png';
            myImage.onload = function () {
                doc.addImage(myImage, 'png', 0, 0, 205, 300);
                doc.setFontSize(13);
                if (accidentForm.locationfOfIncident === 'vehicle-accident') {
                    doc.text(62, 54, 'x');
                } else if (accidentForm.locationfOfIncident === 'work-related') {
                    doc.text(62, 58, 'x');
                }
                if (accidentForm.firstName) {
                    doc.text(75, 66, accidentForm.firstName);
                }
                if (accidentForm.lastName) {
                    doc.text(100, 66, accidentForm.lastName);
                }
                if (accidentForm.address1) {
                    doc.text(75, 72, accidentForm.address1);
                }
                if (accidentForm.address2) {
                    doc.text(110, 72, accidentForm.address2);
                }
                if (accidentForm.city) {
                    doc.text(130, 72, accidentForm.city);
                }
                if (accidentForm.zip) {
                    doc.text(175, 72, accidentForm.zip);
                }
                if (accidentForm.homePhone) {
                    doc.text(75, 81, accidentForm.homePhone);
                }
                if (accidentForm.department) {
                    doc.text(103, 86, accidentForm.department);
                }
                if (accidentForm.division) {
                    doc.text(145, 91, accidentForm.division);
                }
                if (accidentForm.position) {
                    doc.text(75, 96, accidentForm.position);
                }
                if (accidentForm.supervisor) {
                    doc.text(75, 101, accidentForm.supervisor);
                }
                if (accidentForm.dateOfIncident) {
                    doc.text(75, 107, accidentForm.dateOfIncident);
                }
                if (accidentForm.timeOfIncident) {
                    doc.text(75, 113, accidentForm.timeOfIncident);
                }
                if (accidentForm.locationOfIncidentAddress1) {
                    doc.text(75, 118, accidentForm.locationOfIncidentAddress1);
                }
                if (accidentForm.locationOfIncidentCity) {
                    doc.text(130, 118, accidentForm.locationOfIncidentCity);
                }
                if (accidentForm.locationOfIncidentState) {
                    doc.text(158, 118, accidentForm.locationOfIncidentState);
                }
                if (accidentForm.locationOfIncidentZip) {
                    doc.text(170, 118, accidentForm.locationOfIncidentZip);
                }
                if (accidentForm.policeInvolved) {
                    doc.text(110, 128, accidentForm.policeInvolved);
                }
                if (accidentForm.policeInvolvedInfo) {
                    doc.text(75, 138, accidentForm.policeInvolvedInfo);
                }

                if (accidentForm.photosTaken === 'yes') {
                    doc.text(75, 144, 'x');
                } else if (accidentForm.photosTaken === 'no') {
                    doc.text(88, 144, 'x');
                }
                if (accidentForm.paramedicsCalled === 'yes') {
                    doc.text(75, 149, 'x');
                } else if (accidentForm.paramedicsCalled === 'no') {
                    doc.text(88, 149, 'x');
                }

                if (accidentForm.injuredEmployees) {
                    doc.text(75, 159, accidentForm.injuredEmployees);
                }
                if (accidentForm.natureInjury) {
                    doc.text(75, 165, accidentForm.natureInjury);
                }
                if (accidentForm.injuryDetail) {
                    doc.text(75, 170, accidentForm.injuryDetail);
                }
                if (accidentForm.witness) {
                    doc.text(75, 180, accidentForm.witness);
                }
                if (accidentForm.vehicleTypeUnitNumber) {
                    doc.text(75, 197, accidentForm.vehicleTypeUnitNumber);
                }
                if (accidentForm.damageAmount === 'Less than $1000') {
                    doc.text(75, 203, 'x');
                } else if (accidentForm.damageAmount === '$1001-$5000') {
                    doc.text(128, 204, 'x');
                } else if (accidentForm.damageAmount === '$5000+') {
                    doc.text(75, 207, 'x');
                }

                if (accidentForm.otherVehicleMake) {
                    doc.text(75, 220, accidentForm.otherVehicleMake);
                }
                if (accidentForm.otherVehicleModel) {
                    doc.text(75, 225, accidentForm.otherVehicleModel);
                }
                if (accidentForm.otherVehicleYear) {
                    doc.text(75, 230, accidentForm.otherVehicleYear);
                }
                if (accidentForm.otherVehicleLicensePlate) {
                    doc.text(75, 235, accidentForm.otherVehicleLicensePlate);
                }

                if (accidentForm.policeDriverTicketed === 'yes') {
                    doc.text(75, 269, 'x');
                } else if (accidentForm.policeDriverTicketed === 'no') {
                    doc.text(88, 269, 'x');
                }

                if (accidentForm.policeDriverInformation) {
                    doc.text(75, 280, accidentForm.policeDriverInformation);
                }

                doc.save('accidentForm.pdf');
                
            };
            $state.go('success');
        }
    }
})();
