// app.js
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './myApp.component';
import 'angular-material';

const root = angular
    .module('myApp', [
        uiRouter,
        Common,
        Components,
        'ngMaterial'
    ])
    .component('myApp', AppComponent)
    .config(['$urlRouterProvider', '$urlMatcherFactoryProvider', ($urlRouterProvider, $urlMatcherFactoryProvider) => {
        // TODO: Get this working.
        // uses ! instead of #
        // IIS needs a url rewrite rule to support this
        // https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#user-content-how-to-configure-your-server-to-work-with-html5mode
        // $locationProvider.html5Mode(true);

        $urlMatcherFactoryProvider.caseInsensitive(true);

        // For any unmatched url, redirect to /dashboard
        $urlRouterProvider.otherwise("/");
    }])
    .name;
    
        
export default root;