import { SET_IS_LOADING } from "Redux/types"
import { SET_BINS_LIST } from "Redux/types"
import { SET_POINT_BINS } from "Redux/types"
import { SET_BIN_DETAILS } from "Redux/types"
import { SET_BINS_LIST_NOT_IN_POINT_BIN } from "Redux/types"
import { SET_IS_SECCESS } from "Redux/types"
import { SET_ERRORS } from "Redux/types"
import axios from "axios"

export const AddBin = (data)=>dispatch=>{
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})



   
  axios.post(`https://genbox.onrender.com/api/bin/createBin`,data )
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
    dispatch({
      type:SET_IS_LOADING,
      payload:false
  })
  
      // dispatch(registerGoogleUser(data))
  }
  )
}

export const FetchAllBins = (data)=>dispatch=>{
  axios.get(`https://genbox.onrender.com/api/bin/FetchAllBins`,data )
  .then(res => {
      console.log(res)

      dispatch({
        type: SET_BINS_LIST,
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

export const UpdateBinStatus = (id,navigation)=>dispatch=>{
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})
  axios.put(`https://genbox.onrender.com/api/bin/updateStatus/${id}`)
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
  }, 3000);
  dispatch({
      type:SET_IS_SECCESS,
      payload:true
  })
  setTimeout(() => {
      dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
    }, 1000);
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

export const FetchAllBinsNotInUse = (data)=>dispatch=>{
  axios.get(`https://genbox.onrender.com/api/bin/FetchAllBinsNotInPointBin`,data )
  .then(res => {
      // console.log(res)

      dispatch({
        type: SET_BINS_LIST_NOT_IN_POINT_BIN,
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


export const AddPointBin = (data)=>dispatch=>{
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})



   
  axios.post(`https://genbox.onrender.com/api/Pointbin/CreatePointBin`,data )
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
    dispatch({
      type:SET_IS_LOADING,
      payload:false
  })
  
      // dispatch(registerGoogleUser(data))
  }
  )
}

export const FetchAllPointBins= (data)=>dispatch=>{
  axios.get(`https://genbox.onrender.com/api/bin/fetchAllPointBins`,data )
  .then(res => {
      // console.log(res)

      dispatch({
        type: SET_POINT_BINS,
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

export const FetchBinByID= (data)=>dispatch=>{
  axios.get(`https://genbox.onrender.com/api/bin/fetchBinByID/${data}` )
  .then(res => {
      // console.log(res)

      dispatch({
        type: SET_BIN_DETAILS,
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

export const DeleteBinByID = (id)=>dispatch=> {
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})

  axios.delete(`https://genbox.onrender.com/api/bin/deleteBinById/${id}`)
  .then(res => {
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
  dispatch({
    type:SET_IS_SECCESS,
    payload:false
})
  })

  .catch(err =>
      {
        dispatch({
          type: SET_ERRORS,
          payload: err?.response?.data
      })
      dispatch({
        type:SET_IS_SECCESS,
        payload:false
    })
    dispatch({
      type:SET_IS_LOADING,
      payload:false
  })
  })
  
}


export const updateBin = (id,data)=>dispatch=> {
  dispatch({
    type: SET_ERRORS,
    payload: []
})
dispatch({
    type:SET_IS_LOADING,
    payload:true
})
axios.put(`https://genbox.onrender.com/api/bin/updateBin/${id}`,data)
.then(res => {
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
      dispatch({
        type: SET_ERRORS,
        payload: err?.response?.data
    })
    dispatch({
      type:SET_IS_SECCESS,
      payload:false
  })
  dispatch({
    type:SET_IS_LOADING,
    payload:false
})
})

}