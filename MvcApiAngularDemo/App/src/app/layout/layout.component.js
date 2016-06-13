(function () {
    'use strict';

    function layoutController($timeout, $mdSidenav, $log) {
        this.toggleLeft = buildDelayedToggler('navmenu');
        /**
         * Supplies a function that will continue to operate until the
         * time is up.
         */
        function debounce(func, wait, context) {
            var timer;

            return function debounced() {
                var context = this,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function () {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildDelayedToggler(componentId) {
            return debounce(function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(componentId)
                  .toggle()
                  .then(function () {
                      $log.debug("toggle " + componentId + " is done");
                  });
            }, 200);
        }
    }

    angular.module('myApp.layout')
        .component('appLayout', {
            controller: layoutController,
            templateUrl: 'app/layout/layout.component.html'
        });
})();