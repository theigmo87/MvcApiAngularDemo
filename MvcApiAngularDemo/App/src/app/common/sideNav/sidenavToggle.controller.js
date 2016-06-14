class SideNavToggleController {
    constructor($mdSidenav, $log) {
        this.$mdSidenav = $mdSidenav;
        this.$log = $log;
    }

    toggleLeft(){
        this.$mdSidenav(this.componentid)
              .toggle()
              .then(() => this.$log.debug("toggle " + this.componentid + " is done"));
    }
}

SideNavToggleController.$inject = ['$mdSidenav', '$log'];

export default SideNavToggleController;