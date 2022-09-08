import React from 'react'
import "./Counter.scss"

const Counter = (props) => {
  const {count} = props

  return (
    <div className='counter'><b>{count}</b></div>
  )
}

export default Counter