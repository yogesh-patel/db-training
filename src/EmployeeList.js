import React from 'react';
import EmployeeItemNew from './EmployeeItemNew';
import List from '@material-ui/core/List'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {onEmployeeSelected} from "./actions/employeeActions";
import {connect} from "react-redux";

class EmployeeList extends React.Component {

    render(){
        const {employees,onDelete,screen,onEmployeeSelected} = this.props;

        const employeeComps =
            employees.map((emp)=>{
           return <EmployeeItemNew key={emp.id}
                                employee={emp}
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
                     onClick={()=>onEmployeeSelected({id:-1,
                         name:'',
                         designation:'',
                         salary:''
                     })}
                     style={{position:'absolute',bottom:50,right:2}}>
                    <AddIcon />
                </Fab>
            }

        </div>
    }
}



export default connect(
    null,
    {
        onEmployeeSelected
    }
)(EmployeeList);
