import SideNavComponent from './sideNav/sideNav';
import SideNavToggle from './sideNav/sideNavToggle';
import LoggerService from './logger/logger';
import ExceptionHandler from './exception/exception';
import HttpProviderConfig from './httpProvider.config.js';

const common = angular
    .module('myApp.common', [
        'ngMaterial',
        LoggerService,
        ExceptionHandler,
        SideNavToggle,
        SideNavComponent
    ])
    .config(HttpProviderConfig.SetResponseInterceptors)
    .run(['$rootScope', '$location', '$timeout', '$mdToast', function($rootScope, $location, $timeout, $mdToast) {

        $rootScope.$on('unauthenticated', function(response) {
            // Redirect to login page
            $location.path('/login');
        });

        $rootScope.$on('serverError', function(eventSource, response) {
            // Show alert or something to give feedback to user that
            // server error was encountered and they need to retry
            // or just display this somewhere on the page
            console.log(response);
            if (response.data && response.data.ExceptionMessage)
                $mdToast.showSimple(response.data.ExceptionMessage);
            else
                $mdToast.showSimple("there was a server error");
        });
    }])
    .name;

export default common;