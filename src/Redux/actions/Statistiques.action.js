import { SET_BIN_STATISTIQUES } from "Redux/types"
import { SET_STATISTIQUES } from "Redux/types"
import axios from "axios"

export const getUsersCounts = (navigation)=>dispatch=>{
   
  axios.get(`https://frail-crab-waistcoat.cyclic.app/api/users/getUserCounts`)
  .then(res => {
      // console.log(res)
      dispatch({
          type: SET_STATISTIQUES,
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


export const getBinsCount = (navigation)=>dispatch=>{
   
  axios.get(`https://frail-crab-waistcoat.cyclic.app/api/bin/getBinsCount`)
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
