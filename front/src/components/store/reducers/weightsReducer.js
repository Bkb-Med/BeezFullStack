import {GET_WEIGHTS} from '../types'

const initialState = {
   
    weights:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_WEIGHTS:
        return {
            ...state,
            weights:action.payload,
            loading:false

        }
        default: return state
    }
 
}