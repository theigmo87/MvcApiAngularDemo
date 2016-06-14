import SideNavToggleComponent from './sideNavToggle.component';

const sidenavToggle = angular
    .module('myApp.common.sidenavToggle', [])
    .component('sidenavToggle', SideNavToggleComponent)
    .name;

export default sidenavToggle;