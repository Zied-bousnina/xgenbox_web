import {  SET_PARTNERSHIP_LIST } from "../types"

const initialState = {
    PartnerShipList: {}
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_PARTNERSHIP_LIST:
            return {
                ...state,
                PartnerShipList: action.payload
              
            }
        
        default:
            return state
    }

}


