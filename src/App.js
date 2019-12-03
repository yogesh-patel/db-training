import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import EmployeeList from './EmployeeList';
import Badge from "@material-ui/core/Badge";
import CenterPanel from './CenterPanel'
import _ from 'lodash';

const drawerWidth = 240;

const useStyles = {
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    menuButton: {
        marginRight: 5
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        marginTop: 30,
        paddingTop: 30,
        paddingLeft:0
    },
    padding: {
        padding: 5,
    },
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                {
                    id: 1,
                    name: 'A',
                    salary: 1000,
                    designation: 'Software Developer',
                    profilePic: 'profilePic.jpg'
                },
                {
                    id: 2,
                    name: 'B',
                    salary: 1000,
                    designation: 'Software Developer',
                    profilePic: 'profilePic.jpg'
                },
                {
                    id: 3,
                    name: 'C',
                    salary: 1000,
                    designation: 'Software Developer',
                    profilePic: 'profilePic.jpg'
                }
            ],
            selectedEmployee: null,
            mobileOpen: false
        }
    }

    onSelectedEmployee = (emp) => {

        this.setState({
            selectedEmployee: emp
        });
    }

    handleDrawerToggle = () => {
        this.setState(
            {mobileOpen: !this.state.mobileOpen});
    };

    cancelEdit = () => {
        this.setState({selectedEmployee:null});
    }

    onNewEmp = () => {
        this.setState({
            selectedEmployee: {id:-1}
        });
    }

    onSubmit = (employee) => {
        if(employee.id > 0){
            //Update
            const {employees} = this.state;
            const newArray = [];
            _.each(employees,(emp)=>{
               if(emp.id === employee.id){
                   newArray.push(employee);
               }else{
                   newArray.push(emp);
               }

            });
            this.setState({employees:newArray});
        }else{
            //Create
            const {employees} = this.state;
            employees.push(employee);

            this.setState({
                employees,
                selectedEmployee:null});
        }
    }

    render() {

        const {classes} = this.props;
        const {employees, selectedEmployee, mobileOpen} = this.state;
        return <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={this.handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap style={{flexGrow: 1}}>
                        Responsive drawer
                    </Typography>
                    <Badge color="secondary" badgeContent={employees.length}
                           className={classes.margin}>
                        <Typography className={classes.padding}>Total Employees</Typography>
                    </Badge>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >

                        <EmployeeList
                            selectedEmployee={selectedEmployee}
                            employees={employees}
                            onNewEmp={this.onNewEmp}
                            onEmpSelected={
                                this.onSelectedEmployee
                            }/>
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <CenterPanel
                        onSubmit={this.onSubmit}
                        cancelEdit={this.cancelEdit}
                        selectedEmployee={selectedEmployee}/>

            </main>

        </div>
    }

}

export default withStyles(useStyles)(App);
