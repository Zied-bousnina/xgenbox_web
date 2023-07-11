
import { SET_ERRORS } from "Redux/types"
import { SET_IS_LOADING } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_USERS_DETAILS } from "Redux/types"
import { SET_USERS } from "Redux/types"

import axios from "axios"

export const GetAllUsers = (navigation)=>dispatch=>{
   
  axios.get(`${process.env.REACT_APP_API_URL}/api/users/getUsers`)
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
   
    axios.get(`${process.env.REACT_APP_API_URL}/api/users/${id}`)
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


  export const BlockUser = (id,navigation)=>dispatch=>{
    dispatch({
        type: SET_ERRORS,
        payload: []
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    axios.put(`${process.env.REACT_APP_API_URL}/api/users/block/${id}`)
    .then(res => {
        // console.log(res)
        
        dispatch({
            type: SET_ERRORS,
            payload: []
        })
        setTimeout(() => {
            
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
        }, 1000);
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
                type:SET_IS_LOADING,
                payload:false
            })
      
        dispatch({
            type:SET_IS_SECCESS,
            payload:false
        })
        // dispatch(registerGoogleUser(data))
    }
    )
  }
  export const UnBlockUser = (id,navigation)=>dispatch=>{
    dispatch({
        type: SET_ERRORS,
        payload: []
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    axios.put(`${process.env.REACT_APP_API_URL}/api/users/deblock/${id}`)
    .then(res => {
        console.log(res)
       
  
        dispatch({
            type: SET_ERRORS,
            payload: []
        })
        setTimeout(() => {
            
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
        }, 1000);
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
            type:SET_IS_LOADING,
            payload:false
        })
        dispatch({
            type:SET_IS_SECCESS,
            payload:false
        })
        // dispatch(registerGoogleUser(data))
    }
    )
  }



