(function(){
    'use strict';

    angular
        .module('app.selectForm')
        .controller('selectFormController', selectFormController)

    selectFormController.$inject = ['$stateParams', '$state', 'localStorageService'];

    function selectFormController($stateParams, $state, localStorageService) {
        var vm = this;
        vm.goToForm = goToForm;
    

        activate();

        function activate() {
            vm.employeeId = JSON.parse(localStorage.getItem('ls.authorizationData'));
        }

        function goToForm (selectedForm) {
            $state.go(selectedForm, {id: $stateParams.id});
        }
    }
})();
