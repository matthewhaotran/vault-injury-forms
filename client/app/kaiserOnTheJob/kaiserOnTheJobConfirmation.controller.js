(function () {
    'use strict';

    angular
        .module('app.kaiserOnTheJob')
        .controller('kaiserOnTheJobConfirmationController', kaiserOnTheJobConfirmationController)

    kaiserOnTheJobConfirmationController.$inject = ['$stateParams','$state', '$filter', 'kaiserOnTheJobFactory'];

    function kaiserOnTheJobConfirmationController($stateParams, $state, $filter, kaiserOnTheJobFactory) {
        var vm = this;
        vm.saveForm = saveForm;
        vm.success = success;

        activate();

        function activate() {
            console.log(101010101);
            kaiserOnTheJobFactory
                .getUser($stateParams.id)
                .then(function (kaiserOnTheJob) {
                    vm.kaiserOnTheJob = kaiserOnTheJob;
                });
        }

        function success() {
            $state.go('success')
        }

        function saveForm(kaiserOnTheJob) {
            var doc = new jsPDF();
            var myImage = new Image();
            myImage.src = 'images/kaiser.png';
            myImage.onload = function () {
                doc.addImage(myImage, 'png', 0, 0, 150, 250);
                doc.setFontSize(11);

                if (kaiserOnTheJob.physicals === 'attached') {
                    doc.text(35, 130, 'x');
                } else if (kaiserOnTheJob.physicals === 'onFile') {
                    doc.text(62, 130, 'x');
                }

                if (kaiserOnTheJob.date) {
                    doc.text(23, 59, $filter('date')(new Date(vm.kaiserOnTheJob.date), 'longDate'));
                }
                if (kaiserOnTheJob.kaiserDoi) {
                    doc.text(98, 59, kaiserOnTheJob.kaiserDoi);
                }

                if (kaiserOnTheJob.employeeName) {
                    doc.text(42, 67, kaiserOnTheJob.employeeName);
                }

                if (kaiserOnTheJob.employerContactPerson) {
                    doc.text(170, 41, kaiserOnTheJob.employerContactPerson);
                }

                if (kaiserOnTheJob.ERhomePhone) {
                    doc.text(210, 51, kaiserOnTheJob.ERhomePhone);
                }
                if (kaiserOnTheJob.ERemployerDept) {
                    doc.text(50, 61, kaiserOnTheJob.ERemployerDept);
                }
                if (kaiserOnTheJob.ERemployerPhone) {
                    doc.text(140, 61, kaiserOnTheJob.ERemployerPhone);
                }
                if (kaiserOnTheJob.firstName) {
                    doc.text(50, 72, kaiserOnTheJob.firstName);
                }
                if (kaiserOnTheJob.lastName) {
                    doc.text(90, 72, kaiserOnTheJob.lastName);
                }
                if (kaiserOnTheJob.address1) {
                    doc.text(38, 82, kaiserOnTheJob.address1);
                }
                if (kaiserOnTheJob.address2) {
                    doc.text(65, 82, kaiserOnTheJob.address2);
                }
                if (kaiserOnTheJob.city) {
                    doc.text(78, 82, kaiserOnTheJob.city);
                }
                if (kaiserOnTheJob.zip) {
                    doc.text(105, 82, kaiserOnTheJob.zip);
                }
                if (kaiserOnTheJob.homePhone) {
                    doc.text(140, 82, kaiserOnTheJob.homePhone);
                }
                if (kaiserOnTheJob.EPE1firstName) {
                    doc.text(5, 101, kaiserOnTheJob.EPE1firstName);
                }
                if (kaiserOnTheJob.EPE1lastName) {
                    doc.text(30, 101, kaiserOnTheJob.EPE1lastName);
                }
                if (kaiserOnTheJob.EPE1employerDept) {
                    doc.text(60, 101, kaiserOnTheJob.EPE1employerDept);
                }
                if (kaiserOnTheJob.EPE1unitNumber) {
                    doc.text(120, 101, kaiserOnTheJob.EPE1unitNumber);
                }
                if (kaiserOnTheJob.EPE1employerPhone) {
                    doc.text(170, 101, kaiserOnTheJob.EPE1employerPhone);
                }
                if (kaiserOnTheJob.EPE2firstName) {
                    doc.text(5, 111, kaiserOnTheJob.EPE2firstName);
                }
                if (kaiserOnTheJob.EPE2lastName) {
                    doc.text(30, 111, kaiserOnTheJob.EPE2lastName);
                }
                if (kaiserOnTheJob.EPE2employerDept) {
                    doc.text(60, 111, kaiserOnTheJob.EPE2employerDept);
                }
                if (kaiserOnTheJob.EPE2unitNumber) {
                    doc.text(120, 111, kaiserOnTheJob.EPE2unitNumber);
                }
                if (kaiserOnTheJob.EPE2employerPhone) {
                    doc.text(170, 111, kaiserOnTheJob.EPE2employerPhone);
                }
                if (kaiserOnTheJob.EPE3firstName) {
                    doc.text(5, 121, kaiserOnTheJob.EPE3firstName);
                }
                if (kaiserOnTheJob.EPE3lastName) {
                    doc.text(30, 121, kaiserOnTheJob.EPE3lastName);
                }
                if (kaiserOnTheJob.EPE3employerDept) {
                    doc.text(60, 121, kaiserOnTheJob.EPE3employerDept);
                }
                if (kaiserOnTheJob.EPE3unitNumber) {
                    doc.text(120, 121, kaiserOnTheJob.EPE3unitNumber);
                }
                if (kaiserOnTheJob.EPE3employerPhone) {
                    doc.text(170, 121, kaiserOnTheJob.EPE3employerPhone);
                }
                if (kaiserOnTheJob.explanation) {
                    doc.text(8, 185, kaiserOnTheJob.explanation);
                }
                if (kaiserOnTheJob.requestedBy) {
                    doc.text(50, 228, kaiserOnTheJob.requestedBy);
                }
                if (kaiserOnTheJob.requestedBy) {
                    doc.text(160, 228, kaiserOnTheJob.requestedBy);
                }
                if (kaiserOnTheJob.ERhomePhone) {
                    doc.text(160, 236, kaiserOnTheJob.ERhomePhone);
                }
                if (kaiserOnTheJob.noDisease) {
                    doc.text(7, 256, 'x');
                }

                if (kaiserOnTheJob.ERemployeeNotified === 'no') {
                    doc.text(71, 264, 'x');
                } else if (kaiserOnTheJob.ERemployeeNotified === 'yes') {
                    doc.text(84, 264, 'x');
                    doc.text(120, 264, kaiserOnTheJob.ERemployeeNotifiedName);
                }

                if (kaiserOnTheJob.DOnotified === 'no') {
                    doc.text(74, 274, 'x');
                } else if (kaiserOnTheJob.DOnotified === 'yes') {
                    doc.text(88, 274, 'x');
                    doc.text(120, 274, kaiserOnTheJob.DOnotifiedName);
                }
                if (kaiserOnTheJob.dateOfNotification) {
                    doc.text(15, 285, kaiserOnTheJob.dateOfNotification);
                }
                if (kaiserOnTheJob.nameTitle) {
                    doc.text(72, 285, kaiserOnTheJob.nameTitle);
                }
                if (kaiserOnTheJob.signature) {
                    doc.text(152, 285, kaiserOnTheJob.signature);
                }

                doc.save('kaiserOnTheJob.pdf');
            };
        }
    }
})();
