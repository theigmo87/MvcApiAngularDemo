import EmployeeComponent from './employees.component';
import EmployeesService from './employees.service';

const employees = angular
    .module('myApp.components.employees', [])
    .component('employees', EmployeeComponent)
    .service('EmployeesService', EmployeesService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
          .state('employees', {
              url: "/employees",
              component: 'employees',
              resolve: {
                  employeesData: (EmployeesService) => EmployeesService.getEmployees()
              }
          });
    })
    .name;

export default employees;