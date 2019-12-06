import {ON_REQUEST_SEND,ON_REQUEST_COMPLETE} from '../constant';
const initialState = {
    loading:false
}

export default (state = initialState, action) => {

    switch(action.type){
        case ON_REQUEST_SEND: {
            return Object.assign({},state,{
                loading:true
            })
        }
        case ON_REQUEST_COMPLETE: {
            return Object.assign({},state,{
                loading:false
            })
        }

        default: return state;

    }
}
