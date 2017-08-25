(function () {
    'use strict';

    angular
        .module('app.emergencyResponseEmployeeReport')
        .controller('emergencyResponseEmployeeReportConfirmationController', emergencyResponseEmployeeReportConfirmationController)

    emergencyResponseEmployeeReportConfirmationController.$inject = ['$stateParams', '$state', 'emergencyResponseEmployeeReportFactory'];

    function emergencyResponseEmployeeReportConfirmationController($stateParams, $state, emergencyResponseEmployeeReportFactory) {
        var vm = this;
        vm.saveForm = saveForm;
        vm.success = success;

        activate();

        function activate() {
            console.log(101010101);
            emergencyResponseEmployeeReportFactory
                .getUser($stateParams.id)
                .then(function (emergencyResponseEmployeeReport) {
                    vm.emergencyResponseEmployeeReport = emergencyResponseEmployeeReport;
                });
        }

        function success() {
            $state.go('success')
        }

        function saveForm(emergencyResponseEmployeeReport) {
            var doc = new jsPDF();
            var myImage = new Image();
            myImage.src = 'images/emergencyResponseEmployeeReport.png';
            myImage.onload = function () {
                doc.addImage(myImage, 'png', 0, 0, 205, 350);
                doc.setFontSize(13);

                if (emergencyResponseEmployeeReport.acronym === 'KHN') {
                    doc.text(5, 21, 'x');
                } else if (emergencyResponseEmployeeReport.acronym === 'KHS') {
                    doc.text(25, 21, 'x');
                } else if (emergencyResponseEmployeeReport.acronym === 'MHS') {
                    doc.text(45, 21, 'x');
                } else if (emergencyResponseEmployeeReport.acronym === 'MGH') {
                    doc.text(65, 21, 'x');
                } else if (emergencyResponseEmployeeReport.acronym === 'MHF') {
                    doc.text(85, 21, 'x');
                } else if (emergencyResponseEmployeeReport.acronym === 'MSJ') {
                    doc.text(105, 21, 'x');
                } else if (emergencyResponseEmployeeReport.acronym === 'SMH') {
                    doc.text(125, 21, 'x');
                } else if (emergencyResponseEmployeeReport.acronym === 'SGH') {
                    doc.text(145, 21, 'x');
                } else if (emergencyResponseEmployeeReport.acronym === 'UCD') {
                    doc.text(165, 21, 'x');
                } else if (emergencyResponseEmployeeReport.acronym === null) {
                    doc.text(185, 26, emergencyResponseEmployeeReport.OTHERACRONYM1);
                }

                if (emergencyResponseEmployeeReport.levelOfExposure === '1') {
                    doc.text(6, 150, 'x');
                } else if (emergencyResponseEmployeeReport.levelOfExposure === '2') {
                    doc.text(6, 157, 'x');
                } else if (emergencyResponseEmployeeReport.levelOfExposure === '3') {
                    doc.text(6, 163, 'x');
                }

                if (emergencyResponseEmployeeReport.exposedTo === 'hivaids') {
                    doc.text(35, 130, 'x');
                } else if (emergencyResponseEmployeeReport.exposedTo === 'hepatitis') {
                    doc.text(62, 130, 'x');
                } else if (emergencyResponseEmployeeReport.exposedTo === 'meningitis') {
                    doc.text(89, 130, 'x');
                } else if (emergencyResponseEmployeeReport.exposedTo === 'needle-stick') {
                    doc.text(120, 130, 'x');
                } else if (emergencyResponseEmployeeReport.exposedTo === 'tb') {
                    doc.text(144, 130, 'x');
                } else if (emergencyResponseEmployeeReport.exposedTo === 'OTHEREXPOSEDTO') {
                    doc.text(163, 130, 'x');
                    doc.text(168, 135, emergencyResponseEmployeeReport.OTHEREXPOSEDTO1);
                }

                if (emergencyResponseEmployeeReport.ERfirstName) {
                    doc.text(50, 41, emergencyResponseEmployeeReport.ERfirstName);
                }
                if (emergencyResponseEmployeeReport.ERlastName) {
                    doc.text(90, 41, emergencyResponseEmployeeReport.ERlastName);
                }

                if (emergencyResponseEmployeeReport.ERincidentDate) {
                    doc.text(130, 41, emergencyResponseEmployeeReport.ERincidentDate);
                }

                if (emergencyResponseEmployeeReport.ERincidentNumber) {
                    doc.text(170, 41, emergencyResponseEmployeeReport.ERincidentNumber);
                }

                if (emergencyResponseEmployeeReport.ERhomePhone) {
                    doc.text(140, 51, emergencyResponseEmployeeReport.ERhomePhone);
                }
                if (emergencyResponseEmployeeReport.ERemployerDept) {
                    doc.text(50, 61, emergencyResponseEmployeeReport.ERemployerDept);
                }
                if (emergencyResponseEmployeeReport.ERemployerPhone) {
                    doc.text(140, 61, emergencyResponseEmployeeReport.ERemployerPhone);
                }
                if (emergencyResponseEmployeeReport.firstName) {
                    doc.text(50, 72, emergencyResponseEmployeeReport.firstName);
                }
                if (emergencyResponseEmployeeReport.lastName) {
                    doc.text(90, 72, emergencyResponseEmployeeReport.lastName);
                }
                if (emergencyResponseEmployeeReport.ssn) {
                    doc.text(140, 72, emergencyResponseEmployeeReport.ssn);
                }
                if (emergencyResponseEmployeeReport.address1) {
                    doc.text(38, 82, emergencyResponseEmployeeReport.address1);
                }
                if (emergencyResponseEmployeeReport.address2) {
                    doc.text(65, 82, emergencyResponseEmployeeReport.address2);
                }
                if (emergencyResponseEmployeeReport.city) {
                    doc.text(78, 82, emergencyResponseEmployeeReport.city);
                }
                if (emergencyResponseEmployeeReport.zip) {
                    doc.text(105, 82, emergencyResponseEmployeeReport.zip);
                }
                if (emergencyResponseEmployeeReport.homePhone) {
                    doc.text(140, 82, emergencyResponseEmployeeReport.homePhone);
                }
                if (emergencyResponseEmployeeReport.EPE1firstName) {
                    doc.text(5, 101, emergencyResponseEmployeeReport.EPE1firstName);
                }
                if (emergencyResponseEmployeeReport.EPE1lastName) {
                    doc.text(30, 101, emergencyResponseEmployeeReport.EPE1lastName);
                }
                if (emergencyResponseEmployeeReport.EPE1employerDept) {
                    doc.text(60, 101, emergencyResponseEmployeeReport.EPE1employerDept);
                }
                if (emergencyResponseEmployeeReport.EPE1unitNumber) {
                    doc.text(120, 101, emergencyResponseEmployeeReport.EPE1unitNumber);
                }
                if (emergencyResponseEmployeeReport.EPE1employerPhone) {
                    doc.text(170, 101, emergencyResponseEmployeeReport.EPE1employerPhone);
                }
                if (emergencyResponseEmployeeReport.EPE2firstName) {
                    doc.text(5, 111, emergencyResponseEmployeeReport.EPE2firstName);
                }
                if (emergencyResponseEmployeeReport.EPE2lastName) {
                    doc.text(30, 111, emergencyResponseEmployeeReport.EPE2lastName);
                }
                if (emergencyResponseEmployeeReport.EPE2employerDept) {
                    doc.text(60, 111, emergencyResponseEmployeeReport.EPE2employerDept);
                }
                if (emergencyResponseEmployeeReport.EPE2unitNumber) {
                    doc.text(120, 111, emergencyResponseEmployeeReport.EPE2unitNumber);
                }
                if (emergencyResponseEmployeeReport.EPE2employerPhone) {
                    doc.text(170, 111, emergencyResponseEmployeeReport.EPE2employerPhone);
                }
                if (emergencyResponseEmployeeReport.EPE3firstName) {
                    doc.text(5, 121, emergencyResponseEmployeeReport.EPE3firstName);
                }
                if (emergencyResponseEmployeeReport.EPE3lastName) {
                    doc.text(30, 121, emergencyResponseEmployeeReport.EPE3lastName);
                }
                if (emergencyResponseEmployeeReport.EPE3employerDept) {
                    doc.text(60, 121, emergencyResponseEmployeeReport.EPE3employerDept);
                }
                if (emergencyResponseEmployeeReport.EPE3unitNumber) {
                    doc.text(120, 121, emergencyResponseEmployeeReport.EPE3unitNumber);
                }
                if (emergencyResponseEmployeeReport.EPE3employerPhone) {
                    doc.text(170, 121, emergencyResponseEmployeeReport.EPE3employerPhone);
                }
                if (emergencyResponseEmployeeReport.explanation) {
                    doc.text(8, 185, emergencyResponseEmployeeReport.explanation);
                }
                if (emergencyResponseEmployeeReport.requestedBy) {
                    doc.text(50, 228, emergencyResponseEmployeeReport.requestedBy);
                }
                if (emergencyResponseEmployeeReport.requestedBy) {
                    doc.text(160, 228, emergencyResponseEmployeeReport.requestedBy);
                }
                if (emergencyResponseEmployeeReport.ERhomePhone) {
                    doc.text(160, 236, emergencyResponseEmployeeReport.ERhomePhone);
                }
                if (emergencyResponseEmployeeReport.noDisease) {
                    doc.text(7, 256, 'x');
                }

                if (emergencyResponseEmployeeReport.ERemployeeNotified === 'no') {
                    doc.text(71, 264, 'x');
                } else if (emergencyResponseEmployeeReport.ERemployeeNotified === 'yes') {
                    doc.text(84, 264, 'x');
                    doc.text(120, 264, emergencyResponseEmployeeReport.ERemployeeNotifiedName);
                }

                if (emergencyResponseEmployeeReport.DOnotified === 'no') {
                    doc.text(74, 274, 'x');
                } else if (emergencyResponseEmployeeReport.DOnotified === 'yes') {
                    doc.text(88, 274, 'x');
                    doc.text(120, 274, emergencyResponseEmployeeReport.DOnotifiedName);
                }
                if (emergencyResponseEmployeeReport.dateOfNotification) {
                    doc.text(15, 285, emergencyResponseEmployeeReport.dateOfNotification);
                }
                if (emergencyResponseEmployeeReport.nameTitle) {
                    doc.text(72, 285, emergencyResponseEmployeeReport.nameTitle);
                }
                if (emergencyResponseEmployeeReport.signature) {
                    doc.text(152, 285, emergencyResponseEmployeeReport.signature);
                }

                doc.save('EmergencyResponseEmployeeReport.pdf');
            };
        }
    }
})();
