class EmployeesService {
    constructor($http) {
        this.$http = $http;
        this.baseUrl = "/api/employee/";
    }

    getEmployees() {
        return this.$http.get(this.baseUrl).then(response => response.data);
    }

    getEmployee(id) {
        return this.$http.get(this.baseUrl + id).then(response => response.data);
    }
}

EmployeesService.$inject = ['$http'];

export default EmployeesService;

//getEmployees: function () {
//    return $http.get(baseUrl)
//        .then(
//            function (response) {
//                return response.data;
//            },
//            function (httpError) {
//                throw httpError.status + " : " + httpError.data;
//            });
//},
//getEmployee: function (id) { 
//    return $http.get(baseUrl + id)
//        .then(
//            function (response) {
//                return response.data;
//            },
//            function (httpError) {
//                throw httpError.status + " : " + httpError.data;
//            });
//}