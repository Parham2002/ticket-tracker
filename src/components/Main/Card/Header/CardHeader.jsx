import React from 'react'
import "./CardHeader.scss"

const CardHeader = (props) => {
  // Object destructuring
  const {name, role} = props
  // displays data on the screen
  return (
    <div className='card-header'>
      <div><b>Name:</b> {name}</div>
      <div><b>Role:</b> {role}</div>
    </div>
  )
}

export default CardHeader