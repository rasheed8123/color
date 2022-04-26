import { Cardcontext } from "../../context/cartcontext"
import { useContext } from "react";

export const Card =()=>{
    const {cart,handlechange} = useContext(Cardcontext)
   

    return (
        <>
       
        
        <button onClick={handlechange}>{cart==true?"Light Theme":"Dark Theme"}</button>
       
        </>
        )
}