
import { SET_ERRORS } from "Redux/types"
import { SET_USERS_DETAILS } from "Redux/types"
import { SET_USERS } from "Redux/types"

import axios from "axios"

export const GetAllUsers = (navigation)=>dispatch=>{
   
  axios.get(`https://genbox.onrender.com/api/users/getUsers`)
  .then(res => {
      // console.log(res)
      dispatch({
          type: SET_USERS,
          payload: res?.data
      })


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
      // dispatch(registerGoogleUser(data))
  }
  )
}

export const GetAllUserDetails = (id,navigation)=>dispatch=>{
   
    axios.get(`http://localhost:3000/api/users/${id}`)
    .then(res => {
        // console.log(res)
        dispatch({
            type: SET_USERS_DETAILS,
            payload: res?.data
        })
  
  
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
        // dispatch(registerGoogleUser(data))
    }
    )
  }



