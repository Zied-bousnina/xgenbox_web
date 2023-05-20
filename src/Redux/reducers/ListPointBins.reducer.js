import {   SET_POINT_BINS } from "../types"

const initialState = {
    ListOfPointBins: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_POINT_BINS:
            return {
                ...state,
                ListOfPointBins: action.payload
              
            }
        
        default:
            return state
    }

}


