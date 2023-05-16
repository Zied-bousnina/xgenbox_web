import {  SET_CONTACT_DETAIL} from "../types"

const initialState = {
    ContactDetails: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CONTACT_DETAIL:
            return {
                ...state,
                ContactDetails: action.payload
              
            }
        
        default:
            return state
    }

}


