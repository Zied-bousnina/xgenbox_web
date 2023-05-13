
import isEmpty from "../../utils/isEmpty"
import {  SET_PROFILES } from "../types"

const initialState = {
    
    profile: {},
    profileIsEmpty: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_PROFILES:
            return {
                ...state,
                profileIsEmpty: isEmpty(action.payload),
                profile: action.payload            
            }
        
        default:
            return state
    }

}


