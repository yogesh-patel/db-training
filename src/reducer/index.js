import { combineReducers } from "redux";
import employee from './employee';
import department from './department';
import app from './app'

const rootReducer = combineReducers({
    employee,
    department,
    app
});

export default rootReducer;
