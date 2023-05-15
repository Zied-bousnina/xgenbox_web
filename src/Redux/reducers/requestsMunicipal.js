import { SET_DEMANDES_MUNICIPAL } from "../types"

const initialState = {
    MunicipalRequest: []
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_DEMANDES_MUNICIPAL:
            return {
                ...state,
                MunicipalRequest: action.payload
              
            }
        
        default:
            return state
    }

}


