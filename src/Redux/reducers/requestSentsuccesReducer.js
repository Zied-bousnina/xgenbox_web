import { SET_IS_SECCESS } from "../types"



const initialState = {
  
    success: false,
   
    
    
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_IS_SECCESS:
            return {
                ...state,
               success: action.payload
                // isLoading: isEmpty(action.payload),
               

            }
        
        default:
            return state
    }

}


