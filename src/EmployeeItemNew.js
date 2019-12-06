import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar'
import profilepic from './icons/profilePic.jpg';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import {onEmployeeSelected} from './actions/employeeActions';

const EmployeeItemNew = (props) => {
    const {employee, selectedEmployee,
        onEmployeeSelected,onDelete} = props;

    const testFunc = () => {
        onEmployeeSelected(employee);
    }

    let weight = 'normal';
    let color = 'black';

    if(selectedEmployee && selectedEmployee.id
        == employee.id){
        weight = 'bold';
        color = 'red';
    }

    const myStyle = {
        borderBottom: '1px solid #000000',
        padding: 15,
        fontWeight:weight,
        color:color
    };

    return (
        <React.Fragment>
        <ListItem alignItems="flex-start"
            selected={selectedEmployee && selectedEmployee.id
            == employee.id}
            onClick={testFunc}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={profilepic} />
            </ListItemAvatar>
            <ListItemText
                primary={employee.name}
                secondary={`${employee.designation} - ${employee.salary}`}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete"
                            onClick={()=>onDelete(employee)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
        </React.Fragment>
    )

}

const mapStateToProps = (store) => {
    return {
        selectedEmployee:store.employee.selectedEmployee,
        departs:store.department.departments
    };
}

export default connect(
    mapStateToProps,

    {
        onEmployeeSelected
    }
)  (EmployeeItemNew);
