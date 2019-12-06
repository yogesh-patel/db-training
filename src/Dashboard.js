import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divder from '@material-ui/core/Divider'
import {connect} from 'react-redux'
import {getDashboardData} from './selector/employee';

class Dashboard extends React.Component {

    render() {
        const {groupByRange} = this.props;
        console.log('Component Render......')
        return <Paper style={{padding: 15, paddingTop: 40}}>
            <Typography component="p">
                0 to Rs.10000: {groupByRange["0-10000"] ? groupByRange["0-10000"].length : '0'} Employees
            </Typography>
            <Divder style={{marginTop: 10, marginBottom: 10}}/>
            <Typography component="p">
                Rs.10000 to Rs.20000: {groupByRange["10000-20000"] ? groupByRange["10000-20000"].length : '0'} Employees
            </Typography>
            <Divder style={{marginTop: 10, marginBottom: 10}}/>
            <Typography component="p">
                Rs.20000 to Rs.50000: {groupByRange["20000-50000"] ? groupByRange["20000-50000"].length : '0'} Employees
            </Typography>
            <Divder style={{marginTop: 10, marginBottom: 10}}/>
            <Typography component="p">
                Rs.50000 and More: {groupByRange["50000"] ? groupByRange["50000"].length : '0'} Employees
            </Typography>
        </Paper>
    }


}

export default connect(
    (state) => {
        return {
            groupByRange: getDashboardData(state)
        }
    }
)(Dashboard);
