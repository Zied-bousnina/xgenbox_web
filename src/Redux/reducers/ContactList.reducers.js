import {   SET_CONTACT_LIST} from "../types"

const initialState = {
    ContactList: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CONTACT_LIST:
            return {
                ...state,
                ContactList: action.payload
              
            }
        
        default:
            return state
    }

}


