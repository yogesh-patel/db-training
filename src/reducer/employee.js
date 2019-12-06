import {ON_EMPLOYEE_RECEIVED, ON_EMPLOYEE_SELECTED,
    ON_EMPLOYEE_ADDED,ON_SEARCH_CHANGED} from '../constant';
const initialState = {
    selectedEmployee:null,
    employees:[],
    searchText:''
}

const myFunc = (state = initialState, action) => {

    switch(action.type){
        case ON_SEARCH_CHANGED: {
            return Object.assign({},state,{
                searchText:action.payload
            })
        }
        case ON_EMPLOYEE_SELECTED: {
            return Object.assign({},state,{
                selectedEmployee:action.payload
            })
        }
        case ON_EMPLOYEE_RECEIVED: {
            return Object.assign({},state,{
                employees:action.payload
            })
        }
        case ON_EMPLOYEE_ADDED:{
            const eixstingArray = state.employees;
            const employee = action.payload;
            if(employee.id < 0){
                employee.id = eixstingArray.length +1;
            }
            const newArray = eixstingArray.concat([employee]);
            return Object.assign({},state,{
                employees:newArray
            })
        }



        default: return state;

    }
}

export default myFunc;
