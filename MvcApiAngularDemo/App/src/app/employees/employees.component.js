(function () {
    'use strict';

    function employeesController(employeesService) {
        var root = this;
        this.getEmployees = function () {
            employeesService.getEmployees()
                .then(function (data) {
                    root.employees = data;
                });
        }
    }

    angular.module('myApp.employees')
        .component('employees', {
            bindings: {
                employees: '<'
            },
            controller: employeesController,
            templateUrl: 'app/employees/employees.component.html'
        });
})();