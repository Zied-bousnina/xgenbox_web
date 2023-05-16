import {  SET_QUOTE_DETAILS} from "../types"

const initialState = {
    quoteDetails: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_QUOTE_DETAILS:
            return {
                ...state,
                quoteDetails: action.payload
              
            }
        
        default:
            return state
    }

}


