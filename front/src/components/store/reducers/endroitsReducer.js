import {GET_ENDROITS} from '../types'

const initialState = {
   
    endroits:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_ENDROITS:
        return {
            ...state,
            endroits:action.payload,
            loading:false

        }
        default: return state
    }
 
}