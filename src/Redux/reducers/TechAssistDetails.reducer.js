import {   SET_TECH_ASSIST_DETAILS} from "../types"

const initialState = {
    TechAssistDetails: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_TECH_ASSIST_DETAILS:
            return {
                ...state,
                TechAssistDetails: action.payload
              
            }
        
        default:
            return state
    }

}


