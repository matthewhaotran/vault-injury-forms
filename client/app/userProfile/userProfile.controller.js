(function(){
    'use strict';

    angular
        .module('app.userProfile')
        .controller('userProfileController', userProfileController)

    userProfileController.$inject = ['userFactory', '$state'];

    function userProfileController(userFactory, $state) {
        var vm = this;
        vm.login = login;

        function login(ssn) {
            $state.go('selectForm', {id: ssn});
        }

        activate();

        function activate() {
            
        }
    }
})();
