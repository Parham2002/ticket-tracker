import React from 'react'
import "./CounterContainer.scss"
// Children imported
import Counter from "./Counter/Counter"
import AddButton from './AddButton/AddButton'
import DeduceButton from './DeduceButton/DeduceButton'

import { useState } from 'react'

const CounterContainer = () => {
  // useState function to keep count number for each card disconnected from each other
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    
    setCount(count+1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count-1)
    }
  }

  return (
    <div className='counter-container'>
      Counter
      <div>
        {/* useState variable passed down to counter component as a prop */}
        <Counter count={count}/>
      </div>
      <div className='buttons'>
        {/* functions passed down as props to add/deduce components */}
        <DeduceButton func={handleDecrement}/>
        <AddButton func={handleIncrement}/>
      </div>
    </div>
  )
}

export default CounterContainer