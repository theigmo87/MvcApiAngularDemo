class SideNavController {
    /*@ngInject*/
    constructor($mdSidenav) {
        this.message = "I'm from the controller!";
        this._$mdSidenav = $mdSidenav;
    }

    closeMe(){
        this._$mdSidenav("navmenu")
            .close();
    }
} 

export default SideNavController;