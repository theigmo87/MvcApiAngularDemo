class SideNavController {
    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
        this.message = "I'm from the controller!";
    }

    close(){
        this.$mdSidenav('navmenu').close()
            .then(function () {
                console.log("close LEFT is done");
            });
    }
}

export default SideNavController;