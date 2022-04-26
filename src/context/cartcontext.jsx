import { createContext,useState } from "react";
export const Cardcontext = createContext();

export const CardcontextProvider = ({children}) =>{
    const [cart,setcart] = useState(true);
    const handlechange=()=>{
        console.log("clicked")
        setcart(!cart)
    }
    return (
        <Cardcontext.Provider value={{cart, handlechange}}>
            {children}
        </Cardcontext.Provider>
    )
}