import React from 'react'
import "./DeduceButton.scss"

const DeduceButton = (props) => {
  const {func} = props
  return (
    <div onClick={func} className='decrement'>-</div>
  )
}

export default DeduceButton