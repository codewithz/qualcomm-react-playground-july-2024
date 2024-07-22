import React, { useState } from 'react'

export default function NameChangeComponent() {

    // const [variable,setVariable]=useState(default);

    const [name,setName]=useState("Rohit")

    const changeName=()=>{
        setName(name.concat(" Sharma"))
    }
  return (
    <div>
        Name :{name}
        <br />
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}
