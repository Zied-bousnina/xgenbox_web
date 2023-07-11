import axios from 'axios'
import { SET_CURRENT_ACCESS, SET_ERRORS, SET_IS_LOADING, SET_LOADING, SET_PROFILES, SET_REQUEST, SET_USER } from '../types'


import { SetAuthToken } from '../../utils/SetAuthToken';
import jwt_decode from "jwt-decode"
import { GetProfile } from './profile.actions';


export function setLoading(isLoading) {
    return {
      type: SET_LOADING,
      payload: isLoading,
    };
  }

export const setCurrentUser = (decoded) => {
    return {
        type: SET_USER,
        payload: decoded
    }
}

export const loginUser = (userData) => dispatch => {
    // console.log("--------------userData-----------------------------")
    // console.log("--------------------------------------",userData)
    // console.log("---------------userData----------------------------")
    dispatch({
        type: SET_ERRORS,
        payload: []
    })
    dispatch({
        type:SET_IS_LOADING,
        payload:true
    })
    dispatch(LogOut())
    axios
        .post(`${process.env.REACT_APP_API_URL}/api/users/login`, {email:userData.email, password:userData.password})
        .then(res => {
            
            const { token } = res.data
      
            
          
            // AsyncStorage.setItem('jwtToken', token)
            localStorage.setItem('jwtToken', token)
            
            
            // Set token to Auth header
            SetAuthToken(token)
            dispatch(GetProfile())
            // Decode token to get user data
            const decoded = jwt_decode(token)
            // Set current user
            dispatch(setCurrentUser(decoded))
            dispatch({
                type: SET_ERRORS,
                payload: []
            })
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
        })
        .catch(err => 
           { 
            // console.log(err)
            dispatch({
                type: SET_ERRORS,
                payload: err?.response?.data
            })
            dispatch({
                type:SET_IS_LOADING,
                payload:false
            })
        }
            
        )
}

export const LogOut = (navigation)=>dispatch=>{
    // AsyncStorage.removeItem("jwtToken")
    localStorage.removeItem("jwtToken")
    
    
   
    
    dispatch( {
        type: SET_USER,
        payload: {}
    })
    dispatch({
        type: SET_PROFILES,
        payload:[]
    })
    dispatch({
        type: SET_REQUEST,
        payload:{}
    })
    dispatch({
        type: SET_CURRENT_ACCESS,
        payload:[]
    })
    // navigation.navigate('Login')
   
}

export const getUserByEmail = (info,navigation)=>dispatch=>{
    const {idToken,user } = info
    const {email, familyName, givenName, id, photo } = info.user
    // console.log(photo)

const data = {email, name:familyName+' '+givenName,avatar:photo, googleId:id, tokenId:idToken}
    // console.log(data.email )
    // email, name, googleId, tokenId
    // console.log("email", info.user.email)
    axios.get(`${process.env.REACT_APP_API_URL}/api/users/getUserByEmail/${info.user.email}`)
    .then(res => {
        // console.log(res)
        dispatch({
            type: SET_USER,
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







