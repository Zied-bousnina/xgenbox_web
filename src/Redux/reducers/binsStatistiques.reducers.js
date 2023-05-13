
import isEmpty from "../../utils/isEmpty"
import { SET_ERRORS, SET_USER, SET_LOADING, SET_STATISTIQUES, SET_BIN_STATISTIQUES } from "../types"

const initialState = {
    statistiques: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_BIN_STATISTIQUES:
            return {
                ...state,
                statistiques: action.payload
              
            }
        
        default:
            return state
    }

}


