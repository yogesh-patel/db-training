import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import profilepic from './icons/profilePic.jpg';

const EmployeeItemNew = (props) => {
    const {employee, selectedEmployee,
        onEmpSelected} = props;

    const testFunc = () => {
        onEmpSelected(employee);
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
                secondary={employee.designation}
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        </React.Fragment>
    )

}

export default EmployeeItemNew;
