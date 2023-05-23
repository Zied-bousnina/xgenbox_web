import {  SET_BIN_DETAILS, SET_CONTACT_DETAIL, SET_POINTBIN_DETAILS} from "../types"

const initialState = {
    PointBinDetails: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_POINTBIN_DETAILS:
            return {
                ...state,
                PointBinDetails: action.payload
              
            }
        
        default:
            return state
    }

}


