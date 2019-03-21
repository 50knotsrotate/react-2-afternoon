import React, { Component } from 'react';
import Employee from './models/Employee';
import EmployeeList from './components/EmployeeList'
import EmployeeEditor from './components/EmployeeEditor'
import '../../src/index.css'

// components
import Header from './components/Header';

class App extends Component {
  constructor() { 
    super()

    this.state = {
      employees: [new Employee(0, 'Patrick', '8753895734', 'CEO'), new Employee(1, 'Billy', '9598303', 'Assistant CEO')],
      selectedEmployee: null
    }
  }

  selectEmployee(employee) { 
    
    this.setState({
      selectedEmployee: employee
    })

  }

  refresh() { 
    this.setState(this.state)
  }

  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          <EmployeeList employees={this.state.employees} selected={this.selectEmployee.bind(this)}/>
          <EmployeeEditor selected={this.state.selectedEmployee} refreshList={this.refresh.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;
