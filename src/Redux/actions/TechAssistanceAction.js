
import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_DEMANDES_MUNICIPAL } from "Redux/types"
import { SET_TECH_ASSIST } from "Redux/types"
import { SET_TECH_ASSIST_DETAILS } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_IS_LOADING } from "Redux/types"
import { SET_ERRORS } from "Redux/types"

import axios from "axios"

export const createTechAssist = (data)=>dispatch=>{

  console.log(data)
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})



   
  axios.post(`${process.env.REACT_APP_API_URL}/api/site/createTechAssist`,data, {   
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

export const FetchAllTechAssist = (data)=>dispatch=>{
  axios.get(`${process.env.REACT_APP_API_URL}/api/site/TechAssist/fetchAll`,data )
  .then(res => {
      console.log(res)

      dispatch({
        type: SET_TECH_ASSIST,
        payload: res.data
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
      dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
  
      // dispatch(registerGoogleUser(data))
  }
  )
}

export const GetTechAssistDetailsById = (id,navigation)=>dispatch=>{
   
  axios.get(`${process.env.REACT_APP_API_URL}/api/site/techAssist/fetchByID/${id}`)
  .then(res => {
      // console.log(res)
      dispatch({
          type: SET_TECH_ASSIST_DETAILS,
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

export const UpdateTechAssistStatus = (id,navigation)=>dispatch=>{
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})
  axios.put(`${process.env.REACT_APP_API_URL}/api/site/TechAssist/readed/${id}`)
  .then(res => {
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
  })
  .catch(err => 
     { 
      // console.log("err in authAction.js line 366",err)
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