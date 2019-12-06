import React from 'react';
import EmployeeItemNew from './EmployeeItemNew';
import List from '@material-ui/core/List'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {onSearchChange, onEmployeeSelected} from "./actions/employeeActions";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {getFilteredEmployees} from './selector/employee';

const useStyles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 250,
    },
    input: {
        marginLeft: 5,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
};

class EmployeeList extends React.Component {

    onSearchChange = (e) => {
        const {onSearchChange} = this.props;
        onSearchChange(e.target.value);
    }

    render() {
        console.log('Render List...')
        const {filteredData, onDelete, screen, onEmployeeSelected,
            classes} = this.props;

        const employeeComps = filteredData.map((emp) => {
            return <EmployeeItemNew key={emp.id}
                                    employee={emp}
                                    onDelete={onDelete}
            />
        });


        return <div style={{position: 'relative', height: '100%'}}>
            <Paper component="form" className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    onChange={(e)=>this.onSearchChange(e)}
                    className={classes.input}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <List>
                {employeeComps}
            </List>
            <Fab color="secondary"
                 onClick={() => onEmployeeSelected({
                     id: -1,
                     name: '',
                     designation: '',
                     salary: ''
                 })}
                 style={{position: 'absolute', bottom: 50, right: 2}}>
                <AddIcon/>
            </Fab>

        </div>
    }
}

const mapStateToProps = (store) => {
    return {
        searchText:store.employee.searchText,
        filteredData: getFilteredEmployees(store)
    }
}



export default withStyles(useStyles)(connect(
    mapStateToProps,
    {
        onEmployeeSelected,
        onSearchChange
    }
)(EmployeeList));
