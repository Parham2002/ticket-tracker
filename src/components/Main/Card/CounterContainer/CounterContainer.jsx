import React from 'react'
import "./CounterContainer.scss"
import Counter from "./Counter/Counter"

const CounterContainer = () => {
  return (
    <div className='counter-container'>
      Counter
      <Counter/>
    </div>
  )
}

export default CounterContainer