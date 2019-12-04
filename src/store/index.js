import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from '../reducer';

export default  (initialState = {}) =>{
    const middleware = [thunk, logger];
    // const middleware = [thunk];
    const composeEnhancers = compose;
    const enhancer = composeEnhancers(applyMiddleware(...middleware));
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
}
