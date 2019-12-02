import React from 'react';
import EmployeeItem from './EmployeeItem';

class EmployeeList extends React.Component {

    render(){
        const {employess,onEmpSelected,
            selectedEmployee} = this.props;

        const employeeComps =
            employess.map((emp)=>{
           return <EmployeeItem key={emp.id}
                                employee={emp}
                                onEmpSelected={onEmpSelected}
                                selectedEmployee={selectedEmployee}
            />
        });

        return <div>
            {employeeComps}
        </div>
    }
}

export default EmployeeList;
