import React, { Component } from 'react';

class EmployeeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: null,
      originalEmployee: null,
      notModified: true
    };
  }

  componentWillReceiveProps(props) { 

    this.setState({
      employee: Object.assign({}, props.selected),
      originalEmployee: props.selected
    })

  }

  handleChange(prop, val) { 

    if (this.state.notModified) { 
      this.setState({
        notModified: false
      })
    }

    var employeeCopy = Object.assign({}, this.state.employee)
    employeeCopy[prop] = val

    this.setState({
      employee: employeeCopy
    })

  }

  save() { 
   
    this.props.selected.updateName(this.state.employee.name)
    this.props.selected.updatePhone(this.state.employee.phone)
    this.props.selected.updateTitle(this.state.employee.title)

    this.setState({
      originalEmployee: this.state.employee,
      notModified: true
    })

    this.props.refreshList()

    
  }

  cancel() { 
    this.setState({
      employee: this.state.originalEmployee
    })
  }
  
  render() {
    return (
      <div className="infoCard">
        { 
          this.state.employee
          ? 
          <div>
            <span id="employeeID"> ID: { this.state.employee.id } </span>
            <p id="employeeTitle"> { this.state.originalEmployee.name } </p>
            <br />
            <button id="saveBtn" className="confirmationButton" disabled={this.state.notModified} onClick={ this.save.bind(this) }> Save </button>
            <button className="neutralButton" disabled={this.state.notModified} onClick={ this.cancel.bind(this) }> Cancel </button>
            <br />
            <span className="placeholderText"> Name </span>
            <input className="materialInput" value={ this.state.employee.name } onChange={ (e) => { this.handleChange('name', e.target.value) } }></input>
            <span className="placeholderText"> Phone Number </span>
            <input className="materialInput" value={ this.state.employee.phone } onChange={ (e) => { this.handleChange('phone', e.target.value) } }></input>
            <span className="placeholderText"> Title </span>
            <input className="materialInput" value={ this.state.employee.title } onChange={ (e) => { this.handleChange('title', e.target.value) } }></input>
          </div>
          :
          <p id="noEmployee"> No Employee Selected </p>
        }
       
      </div>
    )
  }
}

export default EmployeeEditor;