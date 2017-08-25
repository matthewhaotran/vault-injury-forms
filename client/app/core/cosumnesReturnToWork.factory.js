(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('cosumnesReturnToWorkFactory', cosumnesReturnToWorkFactory)

    cosumnesReturnToWorkFactory.$inject = ['$http'];

    function cosumnesReturnToWorkFactory($http) {
        var service = {
            getUsers: getUsers,
            getUser: getUser,
            submitForm: submitForm
        };

        return service;

        function getUsers() {
            return $http
                .get('/api/cosumnesReturnToWork/vaultir')
                .then(function (response) {
                    return response.data;
                });
        }

        function getUser(ssn) {
            return $http
                .get('/api/cosumnesReturnToWork/vaultir/' + ssn)
                .then(function (response) {
                    return response.data;
                });
        }

        function submitForm(formSubmit) {
            return $http
                .post('/api/cosumnesReturnToWork/vaultir', formSubmit)
                .then(function (response) {
                    return response.data;
                    console.log(response.data)
                });
        }
    }
})();
