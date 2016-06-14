import DashboardComponent from './dashboard.component';

const dashboard = angular
    .module('myApp.components.dashboard', [])
    .component('dashboard', DashboardComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
          .state('dashboard', {
              url: "/",
              component: 'dashboard'
          });
    })
    .name;

export default dashboard;