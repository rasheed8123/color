import { useContext } from 'react'
import { Cardcontext } from '../context/cartcontext'
import { Navigate } from 'react-router-dom'

export const PrivateRoute =({children})=>{
  const {cart}= useContext(Cardcontext)

  if(cart){
      return <Navigate to={"/Others"}/>
  }

  return children;
}