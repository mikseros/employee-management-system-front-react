import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import {Link} from "react-router-dom";
import { withRouter } from '../withRouter';

class ListEmployeeComponent extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        employees: []
    }
    this.editEmployee = this.editEmployee.bind(this);
  }

  editEmployee(id) {
    this.props.navigate(`/update-employee/${id}`);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data});
    });
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Employees List</h2>
        <div>
          {/* <button className='btn btn-primary' onClick={this.addEmployee}> Add Employee</button> */}
          <button className='btn btn-primary'><Link to="add-employee" className="btn btn-primary" name="add">Add Employee</Link></button>
        </div>
        <div className='row'>
          <table className='table table-striped table bordered'>
            <thead>
              <tr>
                <th> Employee Frist Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email Id</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.employees.map(
                  employee =>
                  <tr key = {employee.id}>
                    <td> { employee.firstName} </td>
                    <td> { employee.lastName } </td>
                    <td> { employee.emailId } </td>
                    <td>
                      <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default withRouter(ListEmployeeComponent);
