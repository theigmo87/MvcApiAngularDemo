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
    ]).config(function ($stateProvider, $urlRouterProvider) {
        // TODO: Get this working.
        // case insensitive urls
        // $urlMatcherFactory.caseInsensitive(true);
        // uses ! instead of #
        // IIS needs a url rewrite rule to support this
        // https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#user-content-how-to-configure-your-server-to-work-with-html5mode
        // $locationProvider.html5Mode(true);

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