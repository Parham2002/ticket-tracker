import React from 'react'
import "./AddButton.scss"

const AddButton = (props) => {
  const {func} = props;

  return (
    <div onClick={func} className='increment'><button className='increment__button'>+</button></div>
  )
}

export default AddButton