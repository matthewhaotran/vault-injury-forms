(function(){
    'use strict';

    angular
        .module('app.core')
        .controller('successController', successController)

    successController.$inject = ['$state','localStorageService'];

    function successController($state, localStorageService) {
        var vm = this;
        vm.goToSelect = goToSelect;
        vm.logout = logout;

        activate();

        function activate() {}

        function goToSelect() {
            $state.go('selectForm');
        }
        
        function logout() {
            localStorage.clear()
            $state.go('userLogin');
        }
    }
})();
