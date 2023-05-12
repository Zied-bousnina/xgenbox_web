import React from 'react'
// import { Navigate } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
const ForceRedirect = ({user, children}) =>{
    if(user.isConnected && user.role ==="ADMIN"){
        return <Redirect to="/admin" replace/> 
      } 
      return children
}

export default ForceRedirect