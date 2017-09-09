(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('userFactory', userFactory)

    userFactory.$inject = ['$http'];

    function userFactory($http) {
        var service = {
            getUsers: getUsers,
            getUser: getUser,
            getUserByEmployeeId: getUserByEmployeeId
        };

        return service;

        function getUsers() {
			return $http
				.get('/api/users/vaultir')
				.then(function (response) {
					return response.data;
				});
        }
            
        function getUser(ssn) {
			return $http
				.get('/api/users/vaultir/' + ssn)
				.then(function (response) {
					return response.data;
				});
        }
        
        function getUserByEmployeeId(employeeId) {
			return $http
				.get('/api/users/vaultIr/employeeId/' + employeeId)
				.then(function (response) {
					return response.data;
				});
		}
    }
})();
