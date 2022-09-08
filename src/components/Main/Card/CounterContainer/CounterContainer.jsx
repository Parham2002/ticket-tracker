import React from 'react'
import "./CounterContainer.scss"
import Counter from "./Counter/Counter"
import AddButton from './AddButton/AddButton'
import DeduceButton from './DeduceButton/DeduceButton'
import { useState } from 'react'

const CounterContainer = () => {
  let [count=0, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count++)
  }

  const handleDecrement = () => {
    if (count >= 0) {
    }
  }

  return (
    <div className='counter-container'>
      Counter
      <div>
        <Counter count={count}/>
      </div>
      <div className='buttons'>
        <DeduceButton func={handleDecrement}/>
        <AddButton func={handleIncrement}/>
      </div>


    </div>
  )
}

export default CounterContainer