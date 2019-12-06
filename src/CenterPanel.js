import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography";
import EmployeeEditForm from './EmployeeEditForm'
import {connect} from "react-redux";
import {onEmployeeSelected} from "./actions/employeeActions";

const CenterPanel = (props) => {
    const {selectedEmployee,cancelEdit,onSubmit,
        onTextFieldFocus,onTextFieldBlur} = props;

    let content = <Typography variant="h2"
                              style={{textAlign:'center',
                              paddingTop:window.innerHeight/3}}>
        Select Employee to Edit
    </Typography>;
    if(selectedEmployee){
        content = <EmployeeEditForm
            onSubmit={onSubmit}
            cancelEdit={cancelEdit}
            onTextFieldFocus={onTextFieldFocus}
            onTextFieldBlur={onTextFieldBlur}/>;
    }
    return <Paper style={{flex:1,flexGrow:1,
        height:window.innerHeight - 80}}>
        {content}
    </Paper>
}

// const mapStateToProps = (state) => {
//     return {
//         selectedEmployee:state.employee.selectedEmployee
//     };
// }


// const connectReturnFunc = connect((state) => {
//     return {
//         selectedEmployee:state.employee.selectedEmployee
//     }
// });
export default connect((state) => {
        return {
            selectedEmployee:state.employee.selectedEmployee
        }
    },


    {
        onEmployeeSelected
    }


    )(CenterPanel);
// export default newComp;
