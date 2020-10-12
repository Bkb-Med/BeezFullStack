import {GET_RUCHE} from '../types'

const initialState = {
   
    ruches:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_RUCHE:
        return {
            ...state,
            ruches:action.payload,
            loading:false

        }
        default: return state
    }
    
}