import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography";
import EmployeeEditForm from './EmployeeEditForm'

const CenterPanel = (props) => {
    const {selectedEmployee,cancelEdit,onSubmit} = props;

    let content = <Typography variant="h2"
                              style={{textAlign:'center',
                              paddingTop:window.innerHeight/3}}>
        Select Employee to Edit
    </Typography>;
    if(selectedEmployee){
        content = <EmployeeEditForm
            onSubmit={onSubmit}
            cancelEdit={cancelEdit}
            selectedEmployee={selectedEmployee}/>;
    }
    return <Paper style={{flex:1,flexGrow:1,
        height:window.innerHeight - 80}}>
        {content}
    </Paper>
}

export default CenterPanel;
