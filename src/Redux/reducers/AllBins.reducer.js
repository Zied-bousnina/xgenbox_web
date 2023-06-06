

import {  SET_ALL_BINS_ } from "../types"

const initialState = {
    Bins_list: []
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ALL_BINS_:
            return {
                ...state,
                Bins_list: action.payload
              
            }
        
        default:
            return state
    }

}


