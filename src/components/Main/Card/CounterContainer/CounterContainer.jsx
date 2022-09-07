import React from 'react'
import "./CounterContainer.scss"
import Counter from "./Counter/Counter"
import AddButton from './AddButton/AddButton'
import DeduceButton from './DeduceButton/DeduceButton'

const CounterContainer = () => {
  return (
    <div className='counter-container'>
      Counter
      <div>
        <Counter/>
      </div>
      <div className='buttons'>
        <DeduceButton/>
        <AddButton/>
      </div>


    </div>
  )
}

export default CounterContainer