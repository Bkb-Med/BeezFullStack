import {GET_TRAFFICS} from '../types'

const initialState = {
   
    traffics: [],
    recentTrafic:0,
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){
        case GET_TRAFFICS:
           
        return {
            ...state,
           
            traffics:action.payload,
            loading:false,
           
        }
        
        default: return state
    }
 
}