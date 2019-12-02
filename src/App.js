import React from 'react';

import EmployeeList from './EmployeeList';

const emps = [
    {
        id:1,
        name:'A',
        salary:1000
    },
    {
        id:2,
        name:'B',
        salary:1000
    },
    {
        id:3,
        name:'C',
        salary:1000
    }
]
export default class App extends React.Component {
    onSelectedEmployee = (emp) => {
        alert(emp.name);
    }

    render(){
        return (<div>
            <EmployeeList
                employess={emps}
                onEmpSelected={
                        this.onSelectedEmployee
                }/>
        </div>);
    }

}

