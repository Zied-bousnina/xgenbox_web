import {  SET_QUOTE} from "../types"

const initialState = {
    quote: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_QUOTE:
            return {
                ...state,
                quote: action.payload
              
            }
        
        default:
            return state
    }

}


