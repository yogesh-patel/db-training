import React from 'react';
import EmployeeItemNew from './EmployeeItemNew';
import List from '@material-ui/core/List'

class EmployeeList extends React.Component {

    render(){
        const {employees,onEmpSelected,
            selectedEmployee} = this.props;

        const employeeComps =
            employees.map((emp)=>{
           return <EmployeeItemNew key={emp.id}
                                employee={emp}
                                onEmpSelected={onEmpSelected}
                                selectedEmployee={selectedEmployee}
            />
        });

        return <List>
            {employeeComps}
        </List>
    }
}

export default EmployeeList;
