import {ON_EMPLOYEE_SELECTED} from '../constant';
const initialState = {
    selectedEmployee:null,
    employees:[]
}

export default (state = initialState, action) => {

    switch(action.type){
        case ON_EMPLOYEE_SELECTED: {
            return Object.assign({},state,{
                selectedEmployee:action.payload
            })
        }

        default: return state;

    }
}
