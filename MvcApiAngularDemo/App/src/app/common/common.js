import SideNavComponent from './sideNav/sideNav';
import SideNavToggle from './sideNav/sideNavToggle';
import LoggerService from './logger/logger';

const common = angular
    .module('myApp.common', [
        LoggerService,
        SideNavToggle,
        SideNavComponent
    ])
    .name;

export default common;