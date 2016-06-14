import SideNavComponent from './sideNav.component';

const sidenav = angular
    .module('myApp.common.sidenav', [])
    .component('sidenav', SideNavComponent)
    .name;

export default sidenav;