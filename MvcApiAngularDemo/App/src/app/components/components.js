import DashboardComponent from './dashboard/dashboard';
import EmployeesComponent from './employees/employees';

const components = angular
    .module('myApp.components', [
        DashboardComponent,
        EmployeesComponent
    ])
    .name;

export default components;