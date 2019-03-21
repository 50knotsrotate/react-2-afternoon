import React, { Component } from 'react';

class EmployeeEditor extends Component { 
    constructor(props) { 
        super(props)

        this.state = {
            employee: null,
            originalEmployee: null,
            notModified: true
        }
    }

    componentWillReceiveProps(props) { 
        this.setState({
            employee: Object.assign({}, props.selected),
            originalEmployee: props.selected
        })

    }

    handleChange(prop, value) { 

        this.setState({
            notModified: false
        })
        var copy = Object.assign({}, this.state.employee)
        copy[prop] = value

        this.setState({
            employee: copy
        })
    }

    save() {
        this.state.originalEmployee.updateName(this.state.employee.name)
        this.state.originalEmployee.updateTitle(this.state.employee.title)
        this.state.originalEmployee.updatePhone(this.state.employee.phone)
        this.setState({
            originalEmployee: this.state.employee
        })

        this.props.refreshList()
        this.setState({
            notModified: true
        })
        
    }

    cancel() { 
        this.setState({
            employee: this.state.originalEmployee,
            notModified: true
        })

    }

    render() {
        return (
            <div className="infoCard">
                {
                    this.state.employee
                        ?
                        <div>
                            <span id="employeeID"> ID: {this.state.employee.id} </span>
                            <p id="employeeTitle"> {this.state.originalEmployee.name} </p>
                            <br />
                            <button id="saveBtn" className="confirmationButton" disabled={this.state.notModified} onClick={this.save.bind(this)}> Save </button>
                            <button className="neutralButton" disabled={this.state.notModified} onClick={this.cancel.bind(this)}> Cancel </button>
                            <br />
                            <span className="placeholderText"> Name </span>
                            <input className="materialInput" value={this.state.employee.name} onChange={(e) => { this.handleChange('name', e.target.value) }}></input>
                            <span className="placeholderText"> Phone Number </span>
                            <input className="materialInput" value={this.state.employee.phone} onChange={(e) => { this.handleChange('phone', e.target.value) }}></input>
                            <span className="placeholderText"> Title </span>
                            <input className="materialInput" value={this.state.employee.title} onChange={(e) => { this.handleChange('title', e.target.value) }}></input>
                        </div>
                        :
                        <p id="noEmployee"> No Employee Selected </p>
                }

            </div>
        )
    }
}

export default EmployeeEditor