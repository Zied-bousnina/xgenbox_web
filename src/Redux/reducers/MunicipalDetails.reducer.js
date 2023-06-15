import { SET_DETAILS_MUNICIPAL } from "../types"

const initialState = {
    MunicipalDetails: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_DETAILS_MUNICIPAL:
            return {
                ...state,
                MunicipalDetails: action.payload
              
            }
        
        default:
            return state
    }

}


