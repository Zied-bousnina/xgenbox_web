
import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_DEMANDES_MUNICIPAL } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_IS_LOADING } from "Redux/types"
import { SET_ERRORS } from "Redux/types"

import axios from "axios"

export const createQuote = (data)=>dispatch=>{

  console.log(data)
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})



   
  axios.post(`https://genbox.onrender.com/api/site/createQuote`,data, {   
    headers: { "Content-Type": "multipart/form-data" } 
} )
  
  .then(res => {
      console.log(res)
      dispatch({
        type: SET_ERRORS,
        payload: []
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:false
    })

    dispatch({
      type:SET_IS_SECCESS,
      payload:true
  })

  setTimeout(() => {
    dispatch({
      type:SET_IS_SECCESS,
      payload:false
  })
  }, 3000);

  

      // dispatch(registerGoogleUser(data))

      // dispatch(loginUser(data))
  })
  .catch(err => 
     { 
      // console.log("err in authAction.js line 366",err)
      dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      })
      dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
  
      // dispatch(registerGoogleUser(data))
  }
  )
}


