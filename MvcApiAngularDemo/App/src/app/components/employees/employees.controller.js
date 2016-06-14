class EmployeesController {
    constructor(EmployeesService) {
        this.employeesService = EmployeesService;
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
        this.employeesService.getEmployees()
           .then(response => this.employees = response);
    }
}

EmployeesController.$inject = ['EmployeesService'];

export default EmployeesController;