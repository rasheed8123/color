import { useContext, useEffect, useState } from "react"
import style from 'styled-components'
import { Cardcontext } from "../context/cartcontext"

export const Mobile =()=>{
    const [data,setdata] = useState([])
    const {cart} = useContext(Cardcontext)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setdata(json))
            
    },[])

    const Main = style.div`
    &>div{
        background-color:${cart==true?"yellow":"white"};
        display: grid;
        grid-template-columns: repeat(3,30%);
        grid-template-rows: repeat(10,350px);
        grid-gap:5%;
        & div{
            border:1px solid red;
        }
        & img{
            width:50%;
            height:50%;
        }
    }
    `


    return (
        <Main>
        <div>
            {data.map((e)=>{
                return <div>
                    <p>{e.id}</p>
                    <p>{e.title}</p>
                    <p>{e.price}</p>
                    <img src={e.image}></img>
                </div>
            })}
        </div>
        </Main>
    )
}