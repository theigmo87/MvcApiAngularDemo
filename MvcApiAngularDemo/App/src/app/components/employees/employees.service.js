class EmployeesService {
    constructor($http) {
        this._$http = $http;
        this._baseUrl = "/api/employee/";
    }

    getEmployees() {
        return this._$http.get(this._baseUrl).then(response => response.data);
    }

    getEmployee(id) {
        return this._$http.get(this._baseUrl + id).then(response => response.data);
    }
}

EmployeesService.$inject = ['$http'];

export default EmployeesService;