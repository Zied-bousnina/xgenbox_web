import axios from "axios";
import { SET_ERRORS, SET_IS_LOADING, SET_PROFILES } from "../types";
import { setLoading } from "./authActions";







export const AddProfile =  (userData, navigation ) => (dispatch) => {
  // console.log(userData)
  // const [token, settoken] = useState('')
  dispatch({
    type:SET_IS_LOADING,
    payload:true
})
  
  axios.post(`${process.env.REACT_APP_API_URL}/api/profile/upload-profile`, userData, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
      // 'Authorization': 'Bearer ' + token
    }

  })
      .then(async(res) => {
        //////////////////////////////////////////console.log(res)

        
        dispatch({
          type: SET_PROFILES,
          payload: res.data
          
        })
        dispatch(
          setLoading(true)
        )
        dispatch({
          type:SET_IS_LOADING,
          payload:false
      })
        setTimeout(() => {
          dispatch(
            setLoading(false)
          )
          
        }, 3000);
      })
      .catch( (err) =>{
        // console.log("errrrrrrrrrrrrrrrrrr",err)
        dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      })
      dispatch({
        type:SET_IS_LOADING,
        payload:false
    })
        setTimeout(() => {
          dispatch(
            setLoading(false)
          )
          
        }, 3000);
      }
         
      ) 
}

export const GetProfile =  () => (dispatch) => {
  axios.get(`${process.env.REACT_APP_API_URL}/api/profile`)
      .then(async(res) => {
        // console.log(res.data)
        dispatch({
          type: SET_PROFILES,
          payload: res.data
          
        })
      })
      .catch( (err) =>{
        // console.log(err)
      // dispatch({
      //   type: SET_PROFILES,
      //   payload: res.data
        
      // })
    }
         
      )
}