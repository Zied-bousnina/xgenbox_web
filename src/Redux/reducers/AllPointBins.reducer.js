

import {  SET_ALL_POINT_BINS } from "../types"

const initialState = {
    PointBins: []
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ALL_POINT_BINS:
            return {
                ...state,
                PointBins: action.payload
              
            }
        
        default:
            return state
    }

}


