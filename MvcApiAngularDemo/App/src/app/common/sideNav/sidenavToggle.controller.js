class SideNavToggleController {
    constructor($mdSidenav, logger) {
        this._$mdSidenav = $mdSidenav;
        this._logger = logger;
    }

    toggleLeft(){
        this._$mdSidenav(this._targetComponentId)
            .toggle()
            .then(() => this._logger.info("toggle " + this._targetComponentId + " is done"));
    }

    //deep copy the data passed in
    $onChanges(changes){        
        if (changes.componentid)
            this._targetComponentId = angular.copy(changes.componentid.currentValue);

    }
}

SideNavToggleController.$inject = ['$mdSidenav', 'LoggerService'];

export default SideNavToggleController;