import React from 'react'
import "./CardHeader.scss"

const CardHeader = (props) => {
  const {name, role} = props
  return (
    <div className='card-header'>
      <div>Name: {name}</div>
      <div>Role: {role}</div>
    </div>
  )
}

export default CardHeader