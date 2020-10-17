import {GET_TEMPS} from '../types'

const initialState = {
   
    temps:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_TEMPS:
        return {
            ...state,
            temps:action.payload,
            loading:false

        }
        default: return state
    }
 
}