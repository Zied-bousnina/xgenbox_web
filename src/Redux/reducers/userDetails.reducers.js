import { SET_USERS_DETAILS } from "../types"

const initialState = {
    UsersDetails: []
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_USERS_DETAILS:
            return {
                ...state,
                UsersDetails: action.payload
              
            }
        
        default:
            return state
    }

}


