(function(){
    'use strict';

    angular
        .module('app.userLogin')
        .controller('userLoginController', userLoginController)

    userLoginController.$inject = ['userFactory', '$state', 'authFactory'];

    function userLoginController(userFactory, $state, authFactory) {
        var vm = this;
        vm.login = login;

        function login(employeeId, password) {
            var credentials = {
                employeeId: employeeId,
                password: password
            }
            console.log(credentials);

            authFactory
                .login(credentials)
                .then(function(response){
                    console.log(response);
                });

            $state.go('selectForm');
        }

        activate();

        function activate() {
            
        }
    }
})();
