(function () {
    'use strict';

    function sidenavController($mdSidenav) {
        this.message = "I'm from the controller!";
        this.close = function () {
            $mdSidenav('navmenu').close()
                .then(function () {
                    console.log("close LEFT is done");
                });
        }
    }

    angular.module('myApp.layout')
        .component('sidenav', {
            controller: sidenavController,
            templateUrl: 'app/layout/sidenav.component.html'
        });
})();