import React from 'react'
import "./AddButton.scss"

const AddButton = (props) => {
  const {func} = props;

  return (
    <div onClick={func} className='increment'>+</div>
  )
}

export default AddButton