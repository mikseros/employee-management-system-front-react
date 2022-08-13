import axios from 'axios';

const EMPLOYE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYE_API_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYE_API_BASE_URL + '/' + employeeId, employee);
    }
}

export default new EmployeeService()