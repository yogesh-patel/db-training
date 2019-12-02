import React from 'react'

class EmployeeItem extends
    React.Component {

    testFunc = () => {
        const {
            employee,
            onEmpSelected
        } = this.props;
            onEmpSelected(employee);
    }

    render()
    {
        const {employee, selectedEmployee,
                onEmpSelected} = this.props;

        let weight = 'normal';

        if(selectedEmployee && selectedEmployee.id
          == employee.id){
            weight = 'bold';
        }

        const myStyle = {
            borderBottom: '1px solid #000000',
            padding: 15,
            fontWeight:weight
        };


        return <div style={myStyle}
             onClick={this.testFunc}>
            {employee.name}
        </div>
    }
}


export default  EmployeeItem;
