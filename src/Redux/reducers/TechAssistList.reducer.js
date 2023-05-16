import {   SET_TECH_ASSIST } from "../types"

const initialState = {
    TechAssistList: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_TECH_ASSIST:
            return {
                ...state,
                TechAssistList: action.payload
              
            }
        
        default:
            return state
    }

}


