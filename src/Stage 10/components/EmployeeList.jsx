import React from 'react'
const EmployeeList = (props) => { 
    return (
        <ul className = 'listContainer'>
            {
                props.employees.map(employee => { 
                    return <li className='listText' onClick={() => props.selected(employee)}>{employee.name}</li>
                })
            }
        </ul>
    )
}

export default EmployeeList