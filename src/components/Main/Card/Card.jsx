import React from 'react'
import "./Card.scss"
import CardHeader from './Header/CardHeader'
import CounterContainer from './CounterContainer/CounterContainer'


const Card = (props) => {
  const {data} = props

  return (
    <div className='card'>
      <div className='card__header'>
        <CardHeader name={data.name} role={data.role}/>
      </div>
      <div className='card__counter'>
        <CounterContainer/>
      </div>
    </div>
  )
}

export default Card