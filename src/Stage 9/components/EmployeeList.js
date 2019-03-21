import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          { 
            this.props.employees.map(employee => { 
              return <li key={employee.id}className='listText' onClick={(e) => this.props.selectEmployee(employee)}>{employee.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;