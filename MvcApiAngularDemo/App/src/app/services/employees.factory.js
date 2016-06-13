(function () {
    'use strict';
    angular.module('myApp.services')
        .factory('employeesService', employeesService);

    function employeesService($http, $q) {
        console.log("emp service start");
        var baseUrl = "/api/employee/";
        return {
            getEmployees: function () {
                return $http.get(baseUrl)
                    .then(
                        function (response) {
                            return response.data;
                        },
                        function (httpError) {
                            throw httpError.status + " : " + httpError.data;
                        });
            },
            getEmployee: function (id) { 
                return $http.get(baseUrl + id)
                    .then(
                        function (response) {
                            return response.data;
                        },
                        function (httpError) {
                            throw httpError.status + " : " + httpError.data;
                        });
            }
        }
    };
})();