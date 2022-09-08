import React from 'react'
import "./Counter.scss"

const Counter = (props) => {
  const {count} = props

  return (
    <div className='counter'>{count}</div>
  )
}

export default Counter