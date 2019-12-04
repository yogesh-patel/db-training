import React from 'react';
import EmployeeItemNew from './EmployeeItemNew';
import List from '@material-ui/core/List'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class EmployeeList extends React.Component {

    render(){
        const {employees,onEmpSelected,
            selectedEmployee,onDelete,screen} = this.props;

        const employeeComps =
            employees.map((emp)=>{
           return <EmployeeItemNew key={emp.id}
                                employee={emp}
                                onEmpSelected={onEmpSelected}
                                selectedEmployee={selectedEmployee}
                                   onDelete={onDelete}
            />
        });

        return  <div style={{position:'relative',height:'100%'}}>
        <List>
            {employeeComps}
        </List>
            {
                screen === 'employees' &&
                <Fab color="secondary"
                     onClick={this.props.onNewEmp}
                     style={{position:'absolute',bottom:50,right:2}}>
                    <AddIcon />
                </Fab>
            }

        </div>
    }
}

export default EmployeeList;
