import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,
            employee: {}
        }
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    goBack() {
        this.props.navigate('/');
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'> View Employee Details</h3>
                    <br /><br />
                    <div className='card-body'>
                        <div>
                            <label> Employee First Name: </label>
                            <div> { this.state.employee.firstName } </div>
                        </div>
                        <div>
                            <label> Employee Last Name: </label>
                            <div> { this.state.employee.lastName } </div>
                        </div>
                        <div>
                            <label> Employee Email Id: </label>
                            <div> { this.state.employee.emailId } </div>
                        </div>
                        <br />
                        <button  onClick={this.goBack} className="btn btn-secondary">Back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ViewEmployeeComponent);