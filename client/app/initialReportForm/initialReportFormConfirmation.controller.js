(function(){
    'use strict';

    angular
        .module('app.initialReportForm')
        .controller('initialReportFormConfirmationController', initialReportFormConfirmationController)

    initialReportFormConfirmationController.$inject = ['$stateParams','initialReportFormFactory', '$state'];

    function initialReportFormConfirmationController($stateParams, initialReportFormFactory, $state) {
        var vm = this;
        vm.saveForm = saveForm;

        activate();

        function activate() {
            console.log($stateParams.id);
            initialReportFormFactory
                .getUser($stateParams.id)
                .then(function (initialReportForm) {
                    vm.initialReportForm = initialReportForm;
                });
        }

        function saveForm(initialReportForm) {
            var doc = new jsPDF();
            var myImage = new Image();
            myImage.src = 'images/initialReportForm.png';
            myImage.onload = function () {
                doc.addImage(myImage, 'png', 0, 0, 205, 350);
                doc.setFontSize(26);
                doc.text(25, 50, 'This will be the Initial Report Form PDF');

                doc.save('InitialReportForm.pdf');
                $state.go('success');
            };
        }
    }
})();
