(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('kaiserOnTheJobFactory', kaiserOnTheJobFactory)

    kaiserOnTheJobFactory.$inject = ['$http'];

    function kaiserOnTheJobFactory($http) {
        var service = {
            getUsers: getUsers,
            getUser: getUser,
            submitForm: submitForm
        };

        return service;

        function getUsers() {
            return $http
                .get('/api/kaiserOnTheJob/vaultir')
                .then(function (response) {
                    return response.data;
                });
        }

        function getUser(ssn) {
            return $http
                .get('/api/kaiserOnTheJob/vaultir/' + ssn)
                .then(function (response) {
                    return response.data;
                });
        }

        function submitForm(formSubmit) {
            return $http
                .post('/api/kaiserOnTheJob/vaultir', formSubmit)
                .then(function (response) {
                    return response.data;
                    console.log(response.data)
                });
        }
    }
})();
