import {  SET_BIN_DETAILS, SET_CONTACT_DETAIL} from "../types"

const initialState = {
    BinDetails: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_BIN_DETAILS:
            return {
                ...state,
                BinDetails: action.payload
              
            }
        
        default:
            return state
    }

}


