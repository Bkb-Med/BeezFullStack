import {GET_AGENT,POST_AGENT,PUT_AGENT,DELETE_AGENT} from '../types'

const initialState = {
   
    agents:[],
    loading: true,
    QueryState: false,
    Edited: false,
    Deleted:false
}

export default function(state = initialState, action){

    switch (action.type) {
        case DELETE_AGENT:
            return {
                ...state,
              Deleted:true
            }
        case PUT_AGENT:
            return {
                ...state,
              Edited:true
            }
        case POST_AGENT:
            return {
                ...state,
             QueryState:true
            }
        case GET_AGENT:
        return {
            ...state,
           agents:action.payload,
            loading:false

        }
        default: return state
    }
 
}