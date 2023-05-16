import { SET_PARTNER_DETAILS} from "../types"

const initialState = {
    partnerDetails: []
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_PARTNER_DETAILS:
            return {
                ...state,
                partnerDetails: action.payload
              
            }
        
        default:
            return state
    }

}


