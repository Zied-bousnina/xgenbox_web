import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_DEMANDES_MUNICIPAL } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_PARTNER_DETAILS } from "Redux/types"
import { SET_PARTNERSHIP_LIST } from "Redux/types"
import { SET_IS_LOADING } from "Redux/types"
import { SET_ERRORS } from "Redux/types"
import { SET_STATISTIQUES } from "Redux/types"
import axios from "axios"

export const CreatePartership = (data)=>dispatch=>{
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})



   
  axios.post(`${process.env.REACT_APP_API_URL}/api/site/Addpartnership`,data )
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


export const FetchAllPartnership = (data)=>dispatch=>{
  axios.get(`${process.env.REACT_APP_API_URL}/api/site/partnerShip/fetchAll`,data )
  .then(res => {
      console.log(res)

      dispatch({
        type: SET_PARTNERSHIP_LIST,
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

export const GetPartnerDetailsById = (id,navigation)=>dispatch=>{
   
  axios.get(`${process.env.REACT_APP_API_URL}/api/site/partnerShip/fetchByID/${id}`)
  .then(res => {
      // console.log(res)
      dispatch({
          type: SET_PARTNER_DETAILS,
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


export const UpdatePartnerShipStatus = (id,navigation)=>dispatch=>{
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})
  axios.put(`${process.env.REACT_APP_API_URL}/api/site/partnerShip/readed/${id}`)
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