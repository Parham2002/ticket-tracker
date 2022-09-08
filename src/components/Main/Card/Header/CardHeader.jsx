import React from 'react'
import "./CardHeader.scss"

const CardHeader = (props) => {
  const {name, role} = props
  return (
    <div className='card-header'>
      <div><b>Name:</b> {name}</div>
      <div><b>Role:</b> {role}</div>
    </div>
  )
}

export default CardHeader