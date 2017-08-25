(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('accidentFormFactory', accidentFormFactory)

    accidentFormFactory.$inject = ['$http'];

    function accidentFormFactory($http) {
        var service = {
            getUsers: getUsers,
            getUser: getUser,
            submitForm: submitForm
        };

        return service;

        function getUsers() {
            return $http
                .get('/api/accidentForm/vaultir')
                .then(function (response) {
                    return response.data;
                });
        }

        function getUser(ssn) {
            return $http
                .get('/api/accidentForm/vaultir/' + ssn)
                .then(function (response) {
                    return response.data;
                });
        }

        function submitForm(formSubmit) {
            return $http
                .post('/api/accidentForm/vaultir', formSubmit)
                .then(function (response) {
                    return response.data;
                    console.log(response.data)
                });
        }
    }
})();
