import controller from './employees.controller';
import template from './employees.component.html';

const EmployeesComponent = {
    bindings: {
        employeesData: '<'
    },
    controller,
    template
}

export default EmployeesComponent;