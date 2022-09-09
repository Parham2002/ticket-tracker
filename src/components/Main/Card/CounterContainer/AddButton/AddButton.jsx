import React from 'react'
import "./AddButton.scss"

const AddButton = (props) => {
  // Object destructuring
  const {func} = props;
  // Displays the button and passes up an event to the function in its parent on click
  return (
    <div onClick={func} className='increment'><button className='increment__button'>+</button></div>
  )
}

export default AddButton