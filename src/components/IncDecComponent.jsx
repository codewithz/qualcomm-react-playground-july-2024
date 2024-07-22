import React, { useState } from 'react'
import './button.css'

export default function IncDecComponent() {

    const [counter,setCounter]=useState(0)
    // const increment=()=>{
    //     setCounter(counter+1)
    // }
    const decrement=()=>{
        if(counter>0){
            setCounter(counter-1)
        }
    }
  return (
    <div>
      {/* <button style={{backgroundColor:'blue',color:'white'}} 
      onClick={()=>setCounter(counter+1)}>Increment</button> */}
      <button className='inc-button' 
      onClick={()=>setCounter(counter+1)}>Increment</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {counter}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='dec-button'  onClick={decrement}>Decremtent</button>
    </div>
  )
}
