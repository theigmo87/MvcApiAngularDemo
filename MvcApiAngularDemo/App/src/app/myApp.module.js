require('./layout/layout.module.js');
require('./dashboard/dashboard.module.js');
require('./employees/employees.module.js');
require('./services/services.module.js');

(function () {
    'use strict';

    angular.module('myApp', [
        require('angular-ui-router'),
        require('angular-material'),
        'myApp.services',
        'myApp.layout',
        'myApp.dashboard',
        'myApp.employees'
    ]).config(function($stateProvider, $urlRouterProvider){
        //
        // For any unmatched url, redirect to /dashboard
        $urlRouterProvider.otherwise("/dashboard");
        //
        // Now set up the states
        $stateProvider
          .state('dashboard', {
              url: "/dashboard",
              template: '<dashboard></dashboard>' 
          })
          .state('employees', {
              url: "/employees",
              template: '<employees></employees>'
          })
    });
})();