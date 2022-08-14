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
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  viewEmployee(id) {
    this.props.navigate(`/view-employee/${id}`);
  }

  // add id to the path
  editEmployee(id) {
    // step 7
    this.props.navigate(`/add-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then( res => {
      this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    })
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
          {/* step 6 */}
          <button className='btn btn-primary'><Link to="add-employee/_add" className="btn btn-primary" name="add">Add Employee</Link></button>
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
                      <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                      <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-success">View</button>
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
