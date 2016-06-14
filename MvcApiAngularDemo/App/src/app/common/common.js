import SideNavComponent from './sideNav/sideNav';
import SideNavToggle from './sideNav/sideNavToggle';

const common = angular
    .module('myApp.common', [
        SideNavToggle,
        SideNavComponent
    ])
    .name;

export default common;