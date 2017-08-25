(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('authFactory', authFactory)

    authFactory.$inject = ['$http','localStorageService'];

    function authFactory($http, localStorageService) {
        var service = {
            login: login
        };

        return service;

        function login(credentials) {
            return $http
            .post('/api/userLogin/user', credentials)
            .then(function (response) {
                console.log(response);
                localStorageService.set('authorizationData', {
                    token: response.data.token,
                    employeeId: credentials.employeeId,
                });
                return response.data;
            });
        }
    }
})();
