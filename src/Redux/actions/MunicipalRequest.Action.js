import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_DEMANDES_MUNICIPAL } from "Redux/types"
import { SET_ERRORS } from "Redux/types"
import { SET_STATISTIQUES } from "Redux/types"
import axios from "axios"

export const findDemandeInProgress = (navigation)=>dispatch=>{
   
  axios.get(`https://genbox.onrender.com/api/demande-municipal/findDemandeInProgress`)
  .then(res => {
      console.log(res)
      dispatch({
          type: SET_DEMANDES_MUNICIPAL,
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

export const UpadeteRequest = (data, navigation)=> (dispatch) => {
  console.log(data)
  axios.put(`https://genbox.onrender.com/api/demande-municipal/AcceptDemande/${data.id}`
  ,{status:data.status}
  )
  .then(async(res) => {
    
    // dispatch({
    //   type: SET_DEMANDES_MUNICIPAL,
    //   payload: res.data,
      
    // })
   
    
  })
  
  
  .catch( (err) =>{
     
         dispatch({
            type: SET_ERRORS,
            payload: err?.response?.data
          })
      }
     
  
      
  )

}

export const getBinsCount = (navigation)=>dispatch=>{
   
  axios.get(`https://genbox.onrender.com/api/bin/getBinsCount`)
  .then(res => {
      // console.log(res)
      dispatch({
          type: SET_BIN_STATISTIQUES,
          payload: res?.data
      })


      // dispatch(registerGoogleUser(data))

      // dispatch(loginUser(data))
  })
  .catch(err => 
     { 
      // console.log("err in authAction.js line 366",err)
      // dispatch({
      //     type: SET_ERRORS,
      //     payload: err?.response?.data
      // })
      // dispatch(registerGoogleUser(data))
  }
  )
}
