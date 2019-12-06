import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {onEmployeeSelected,onEmployeeSubmit} from "./actions/employeeActions";
import {connect} from "react-redux";

class EmployeeEditForm extends React.Component {
    constructor(props){
        super(props);
        const {selectedEmployee} = props;
        this.state = {
            id:selectedEmployee.id < 0 ? "" :selectedEmployee.id ,
            name:selectedEmployee.name,
            designation:selectedEmployee.designation,
            salary:selectedEmployee.salary
        }
        this.editMode = props.selectedEmployee.id > 0;
    }
    static getDerivedStateFromProps(nextProps,state) {
            const {selectedEmployee} = nextProps;
            if(selectedEmployee &&
                selectedEmployee.id !== state.id){
                const newState = Object.assign({},
                    selectedEmployee,
                    {id:selectedEmployee.id});
                return newState;
            }
            return state;
    }

    onSubmit = () => {
        const employee = Object.assign({},this.state);

        this.props.onEmployeeSubmit(employee);
    }

    onEmpNameFocus = () => {
        const {onTextFieldFocus} = this.props;
        onTextFieldFocus('Employee Name','blue');
    }

    onEmpNameFocusLost = () => {
        const {onTextFieldBlur} = this.props;
        onTextFieldBlur();
    }

    render(){
        const {id,name,designation,salary,
            idError,nameError,designationError} = this.state;
        const {selectedEmployee,onEmployeeSelected} = this.props;
        return <div style={{padding:30}}>
            {
                selectedEmployee && selectedEmployee.id > 0 &&
                <div style={{margin:10}}>{`Id: ${selectedEmployee.id}`}</div>
            }
            <TextField
                error={nameError}
                value={name}
                label="Employee Name"
                helperText={nameError ? "Incorrect entry." : ""}
                fullWidth
                placeholder="Name"
                style={{ margin: 8 }}
                onChange={(e)=>
                    this.setState({name:e.target.value})
                }
                inputProps={
                    {
                      onFocus: this.onEmpNameFocus,
                      onBlur: this.onEmpNameFocusLost
                    }
                }
            />
            <TextField
                error={idError}
                value={designation}
                id="standard-error-helper-text"
                label="Designation"
                helperText={designationError ? "Incorrect entry." : ""}
                fullWidth
                placeholder="Designation"
                style={{ margin: 8 }}
                onChange={(e)=>this.setState({designation:e.target.value})}
            />
            <TextField
                error={idError}
                value={salary}
                id="standard-error-helper-text"
                label="Salary"
                helperText={designationError ? "Incorrect entry." : ""}
                fullWidth
                placeholder="Salary"
                style={{ margin: 8 }}
                onChange={(e)=>this.setState({salary:e.target.value})}
            />
            <div style={{margin:20}}>
                <Button variant="contained" color="primary"
                    onClick={this.onSubmit}>
                    Submit
                </Button>
                <Button
                    style={{marginLeft:20}}
                    variant="contained" color="secondary"
                    onClick={()=>onEmployeeSelected(null)}>
                    Cancel
                </Button>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        selectedEmployee:state.employee.selectedEmployee
    };
}

export default connect(
    mapStateToProps,
    {
        onEmployeeSelected,
        onEmployeeSubmit
    }
)(EmployeeEditForm);
