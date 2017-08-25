(function(){
    'use strict';

    angular
        .module('app.selectForm')
        .controller('selectFormController', selectFormController)

    selectFormController.$inject = ['$stateParams', '$state', 'localStorageService', 'userFactory'];

    function selectFormController($stateParams, $state, localStorageService, userFactory) {
        var vm = this;
        vm.goToForm = goToForm;
        

        activate();

        function activate() {
            vm.credentials = JSON.parse(localStorage.getItem('ls.authorizationData'));
            var employeeId = vm.credentials.employeeId;
            userFactory
                .getUserByEmployeeId(employeeId)
                .then(function(user){
                    vm.user = user;
                });
        }

        function goToForm (selectedForm, user) {
            $state.go(selectedForm, {id: user.ssn});
        }
    }
})();
