(function(){
    'use strict';

    angular
        .module('app.selectForm')
        .controller('selectFormController', selectFormController)

    selectFormController.$inject = ['$stateParams', '$state', 'localStorageService'];

    function selectFormController($stateParams, $state, localStorageService) {
        var vm = this;
        vm.goToForm = goToForm;
        vm.employeeId = JSON.parse(localStorage.getItem('ls.authorizationData'));

        activate();

        function activate() {
            
        }

        function goToForm (selectedForm) {
            $state.go(selectedForm, {id: $stateParams.id});
        }
    }
})();
