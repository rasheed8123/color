import { useContext } from 'react'
import style from 'styled-components'
import { Cardcontext } from '../../context/cartcontext'
export const Main = ()=>{
    const {cart} = useContext(Cardcontext)
    const Main1 = style.h1`
    text-align:center;
    background-color:${cart==true?'yellow':'white'};
    `
    return (
        <Main1>
            <div>
        <h1>HOME PAGE</h1>
        </div>
        </Main1>
    )
}