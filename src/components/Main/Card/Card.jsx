import React from 'react'
import "./Card.scss"
import CardHeader from './Header/CardHeader'
import CounterContainer from './CounterContainer/CounterContainer'


function Card(props) {
  const {data} = props

  return (
    <div className='card'>
      <CardHeader name={data.name} role={data.role}/>
      <CounterContainer/>
    </div>
  )
}

export default Card