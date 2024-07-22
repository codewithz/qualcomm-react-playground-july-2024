import React from 'react'

export default function NameComponent(props) {
    const name=props.name
    const message=props.message
  return (
    <div>
      <h3>Name : {name}</h3>
      <h4>Message : {message}</h4>
    </div>
  )
}
