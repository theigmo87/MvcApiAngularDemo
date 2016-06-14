class SideNavToggleController {
    constructor($timeout, $mdSidenav, $log) {
        this.$timeout = $timeout;
        this.$mdSidenav = $mdSidenav;
        this.$log = $log;
    }

    toggleLeft(){
        this.$mdSidenav(this.componentid)
              .toggle()
              .then(() => this.$log.debug("toggle " + this.componentid + " is done"));
    }
}

export default SideNavToggleController;