(function () {
    'use strict';

    angular
        .module('app.cosumnesReturnToWork')
        .controller('cosumnesReturnToWorkController', cosumnesReturnToWorkController)

    cosumnesReturnToWorkController.$inject = ['$stateParams','$state','userFactory','cosumnesReturnToWorkFactory'];

    function cosumnesReturnToWorkController($stateParams, $state, userFactory, cosumnesReturnToWorkFactory) {
        var vm = this;
        vm.submit = submit;

        activate();

        function activate() {
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
            console.log(formSubmit);
            cosumnesReturnToWorkFactory
            .submitForm(formSubmit)
            .then(function(){
                $state.go('cosumnesReturnToWorkConfirmation', {id: $stateParams.id});
            })
        }
    }
})();
