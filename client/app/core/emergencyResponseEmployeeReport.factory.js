(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('emergencyResponseEmployeeReportFactory', emergencyResponseEmployeeReportFactory)

    emergencyResponseEmployeeReportFactory.$inject = ['$http'];

    function emergencyResponseEmployeeReportFactory($http) {
        var service = {
            getUsers: getUsers,
            getUser: getUser,
            submitForm: submitForm
        };

        return service;

        function getUsers() {
            return $http
                .get('/api/emergencyResponseEmployeeReport/vaultir')
                .then(function (response) {
                    return response.data;
                });
        }

        function getUser(ssn) {
            return $http
                .get('/api/emergencyResponseEmployeeReport/vaultir/' + ssn)
                .then(function (response) {
                    return response.data;
                });
        }

        function submitForm(formSubmit) {
            return $http
                .post('/api/emergencyResponseEmployeeReport/vaultir', formSubmit)
                .then(function (response) {
                    return response.data;
                    console.log(response.data)
                });
        }
    }
})();
