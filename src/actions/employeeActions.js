import {
    ON_EMPLOYEE_SELECTED,
    ON_REQUEST_SEND,
    ON_REQUEST_COMPLETE,
    ON_EMPLOYEE_RECEIVED,
    ON_SEARCH_CHANGED, ON_EMPLOYEE_ADDED
} from "../constant";

export const onSearchChange = (text) => {
    return {
        type:ON_SEARCH_CHANGED,
        payload:text
    }
}
export const onEmployeeSelected = (employee) => {

    return (dispatch) => {
            dispatch(
                {
                    type:ON_EMPLOYEE_SELECTED,
                    payload:employee
                }
            );
    }
}

export const fetchEmployees = () => {

    return (dispatch) => {
        dispatch({type:ON_REQUEST_SEND});

        //Call API
        setTimeout(()=>{
            const employees = [{
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
                }];
            dispatch({
                type:ON_EMPLOYEE_RECEIVED,
                payload: employees
            });
            dispatch({
                type:ON_REQUEST_COMPLETE
            });
        },1000);
    }

}

export const onEmployeeSubmit = (employee) => {
    return dispatch => {
        dispatch({
            type:ON_EMPLOYEE_ADDED,
            payload:employee
        })
    }
}
