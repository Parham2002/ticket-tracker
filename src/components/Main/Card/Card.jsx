import React from 'react'
import "./Card.scss"
import CardHeader from './Header/CardHeader'

function Card() {
  return (
    <>
    <div className='card'>
      <CardHeader/>
    </div>
    <div className='card'>Card2</div>
    <div className='card'>Card3</div>
    <div className='card'>Card4</div>
    <div className='card'>Card5</div>
    <div className='card'>Card6</div>
    <div className='card'>Card7</div>
    <div className='card'>Card8</div>
    <div className='card'>Card9</div>
    <div className='card'>Card10</div>
    </>
  )
}

export default Card