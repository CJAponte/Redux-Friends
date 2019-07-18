import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

const initialState = {
    friends:[],
    isLoggingIn:false,
    error:'',
    isFetching:false,
}

export const reducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_FRIENDS_START:
            return {
                ...state,
                isFetching:true,
                error:''
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                isFetching:false,
                friends:action.payload,
                error:''
            };
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                isFetching:false,
                error:action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn:true,
                error:''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn:false,
                error:''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoggingIn:false
            }        
        default:
            return state;    
    }
}