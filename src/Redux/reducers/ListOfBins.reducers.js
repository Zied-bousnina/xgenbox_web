import {  SET_BINS_LIST } from "../types"

const initialState = {
    ListOfBins: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_BINS_LIST:
            return {
                ...state,
                ListOfBins: action.payload
              
            }
        
        default:
            return state
    }

}


