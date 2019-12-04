import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import EmployeeList from './EmployeeList';
import Badge from "@material-ui/core/Badge";
import CenterPanel from './CenterPanel'
import _ from 'lodash';
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

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
            mobileOpen: false,
            open:false,
            screen:'employees',
            openSnakBar:false
        }
    }

    onSelectedEmployee = (emp) => {

        this.setState({
            selectedEmployee: emp
        });
    }
    handleClose = () => {
        this.setState({employeeToDelete:null,open:false});
    }
    onDelete = (employee) => {
        this.setState({employeeToDelete:employee,open:true});

    }

    handleDelete = () => {
        const {employees,employeeToDelete} = this.state;
        const newArray = [];
        _.each(employees,(emp)=>{
            if(emp.id !== employeeToDelete.id){
                newArray.push(emp);
            }

        });
        this.setState({employees:newArray,
            employeeToDelete:null,open:false});
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
            selectedEmployee: {id:-1,name:'',designation:'',salary:''}
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
            this.setState({employees:newArray,selectedEmployee:null});
        }else{
            //Create
            const {employees} = this.state;
            const newId = employees.length + 1;
            employees.push(Object.assign({},employee,{id:newId}));

            this.setState({
                employees,
                selectedEmployee:null});
        }
    }

    onTextFieldBlur = () => {
        this.setState({openSnakBar:false,
            snackContent:""});
    }
    onTextFieldFocus = (label,color) => {
        this.setState({openSnakBar:true,
            snackContentColor:color,
        snackContent:`You are typing ${label}`});
    }

    render() {

        const {classes} = this.props;
        const {employees, selectedEmployee, open,screen,
            openSnakBar,snackContent,snackContentColor} = this.state;
        return <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={this.handleDrawerToggle}
                        className={classes.menuButton}
                        style={{flexGrow:1}}
                    >
                    </IconButton>
                    {
                        screen === 'employees' ?
                            <React.Fragment>
                                <Button color="secondary"
                                    onClick={()=>
                                    this.setState({screen:'dashboard'})}>
                                    Dashboard
                                </Button>
                                <Badge color="secondary" badgeContent={employees.length}
                                       className={classes.margin}>
                                    <Typography className={classes.padding}>Total Employees</Typography>
                                </Badge>
                            </React.Fragment>
                            :
                            <Button color="secondary"
                                    onClick={()=>
                                        this.setState({screen:'employees'})}>
                                Employees
                            </Button>
                    }

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
                            onDelete={this.onDelete}
                            screen={screen}
                            onEmpSelected={
                                this.onSelectedEmployee
                            }/>
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                {
                    screen === 'employees' ?
                        <CenterPanel
                            onSubmit={this.onSubmit}
                            cancelEdit={this.cancelEdit}
                            selectedEmployee={selectedEmployee}
                            onTextFieldFocus={this.onTextFieldFocus}
                            onTextFieldBlur={this.onTextFieldBlur}/>
                            :
                        <div>Dashboard</div>
                }


            </main>
            <Dialog
                open={open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you really want to delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleDelete} color="secondary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openSnakBar}
                autoHideDuration={null}
            >
                <SnackbarContent
                    message={snackContent}
                    style={{backgroundColor:snackContentColor}}
                    role="alert"
                />
            </Snackbar>
        </div>
    }

}

export default withStyles(useStyles)(App);
