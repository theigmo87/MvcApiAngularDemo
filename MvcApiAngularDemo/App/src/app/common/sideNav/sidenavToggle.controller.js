class SideNavToggleController {
    /*@ngInject*/
    constructor($mdSidenav) {
        this._$mdSidenav = $mdSidenav;
    }

    toggleNav(){
        this._$mdSidenav(this._targetComponentId)
            .toggle();
    }

    //deep copy the data passed in
    $onChanges(changes){        
        if (changes.componentid)
            this._targetComponentId = angular.copy(changes.componentid.currentValue);

    }
}

export default SideNavToggleController;