import React from 'react'
import "./DeduceButton.scss"

const DeduceButton = (props) => {
  // Object destructuring
  const {func} = props

  // Displays the button and passes up an event to the function in its parent on click
  return (
    <div onClick={func} className='decrement'><button className='decrement__button'>-</button></div>
  )
}

export default DeduceButton