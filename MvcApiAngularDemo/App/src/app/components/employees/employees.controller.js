class EmployeesController {
    /*@ngInject*/
    constructor(EmployeesService) {
        this._employeesService = EmployeesService;
    }

    $onInit() {
        if (!this.employees)
            this.employees = [];
    }

    $onChanges(changes) {
        if (changes.employeesData)
            this.employees = changes.employeesData.currentValue;
    }

    getEmployees(){
        this._employeesService.getEmployees()
           .then(response => this.employees = response);
    }
}

export default EmployeesController;