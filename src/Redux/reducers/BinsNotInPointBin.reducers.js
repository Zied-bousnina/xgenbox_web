import {   SET_BINS_LIST_NOT_IN_POINT_BIN } from "../types"

const initialState = {
    ListOfBinsNotInPointBin: []
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_BINS_LIST_NOT_IN_POINT_BIN:
            return {
                ...state,
                ListOfBinsNotInPointBin: action.payload
              
            }
        
        default:
            return state
    }

}


