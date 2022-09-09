import React from 'react'
import "./Counter.scss"

const Counter = (props) => {
  // Object destructuring
  const {count} = props
  // displays the count for each individual card thanks to useState
  return (
    <div className='counter'><b>{count}</b></div>
  )
}

export default Counter