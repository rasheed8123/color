import { Cardcontext } from "../context/cartcontext"
import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

export const Navbar =()=>{
    const {cart} = useContext(Cardcontext)
    const Header1 = styled.header`
    background-color:${cart==true?"red":"lightgreen"};
    height:60px;

    & div{
        display:flex;
        padding:1%;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        
        & div{
            margin-left:5%;
            border:1px solid black;
        }
    }
   `

return (
    <>
    <Header1>
    <div id="header">
    <div><Link to=''>Home</Link></div>
    <div><Link to='/mobiles'>All</Link></div>
    <div><Link to='/others'>Sorted</Link></div>
    <div><Link to='/about'>About us</Link></div>
    <div><Link to='/contact'>Contact Us</Link></div>
    <div>CART  🛒</div>
    </div>
    </Header1>
    </>
)
}