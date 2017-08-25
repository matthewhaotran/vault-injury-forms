(function () {
    'use strict';

    angular
        .module('app.emergencyResponseEmployeeReport')
        .controller('emergencyResponseEmployeeReportController', emergencyResponseEmployeeReportController)

    emergencyResponseEmployeeReportController.$inject = ['$stateParams', '$state', 'userFactory', 'emergencyResponseEmployeeReportFactory'];

    function emergencyResponseEmployeeReportController($stateParams, $state, userFactory, emergencyResponseEmployeeReportFactory) {
        var vm = this;
        vm.submit = submit;

        activate();

        function activate() {
            console.log($stateParams.id);
            userFactory
                .getUser($stateParams.id)
                .then(function (user) {
                    vm.user = user;
                    vm.formSubmit = {
                        firstName: vm.user.firstName,
                        lastName: vm.user.lastName,
                        address1: vm.user.address1,
                        address2: vm.user.address2,
                        city: vm.user.city,
                        state: vm.user.state,
                        zip: vm.user.zip,
                        homePhone: vm.user.homePhone,
                        workPhone: vm.user.workPhone,
                        ssn: vm.user.ssn
                    }
                });
        }

        function submit(formSubmit) {
            emergencyResponseEmployeeReportFactory
                .submitForm(formSubmit)
                .then(function () {
                    console.log('#1');
                    $state.go('emergencyResponseEmployeeReportConfirmation', {id: $stateParams.id});
                });
        }
    }
})();
