import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

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
                return Object.assign({},
                    selectedEmployee,
                    {id:selectedEmployee.id < 0 ?
                            "" :selectedEmployee.id});
            }
    }

    onSubmit = () => {
        const employee = Object.assign({},this.state);
        this.props.onSubmit(employee);
    }

    render(){
        const {id,name,designation,salary,
            idError,nameError,designationError} = this.state;
        return <div style={{padding:30}}>
            <TextField
                disabled={this.editMode}
                error={idError}
                value={id}
                id="standard-error-helper-text"
                label="Employee Id"
                helperText={idError ? "Incorrect entry." : ""}
                fullWidth
                placeholder="Id"
                style={{ margin: 8 }}
            />
            <TextField
                error={nameError}
                value={name}
                id="standard-error-helper-text"
                label="Employee Name"
                helperText={nameError ? "Incorrect entry." : ""}
                fullWidth
                placeholder="Name"
                style={{ margin: 8 }}
                onChange={(e)=>
                    this.setState({name:e.target.value})
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
                    onClick={this.props.cancelEdit}>
                    Cancel
                </Button>
            </div>
        </div>
    }
}

export default EmployeeEditForm;
