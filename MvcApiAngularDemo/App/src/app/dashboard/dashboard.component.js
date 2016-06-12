(function () {
    'use strict';

    function layoutController() {
        
    }

    angular.module('myApp.dashboard')
        .component('dashboard', {
            controller: layoutController,
            templateUrl: 'app/dashboard/dashboard.component.html'
        });
})();