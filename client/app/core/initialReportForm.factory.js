(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('initialReportFormFactory', initialReportFormFactory)

    initialReportFormFactory.$inject = ['$http'];

    function initialReportFormFactory($http) {
        var service = {
            getUsers: getUsers,
            getUser: getUser,
            submitForm: submitForm
        };

        return service;

        function getUsers() {
            return $http
                .get('/api/initialReportForm/vaultir')
                .then(function (response) {
                    return response.data;
                });
        }

        function getUser(ssn) {
            return $http
                .get('/api/initialReportForm/vaultir/' + ssn)
                .then(function (response) {
                    return response.data;
                });
        }

        function submitForm(formSubmit) {
            return $http
                .post('/api/initialReportForm/vaultir', formSubmit)
                .then(function (response) {
                    return response.data;
                    console.log(response.data)
                });
        }
    }
})();
