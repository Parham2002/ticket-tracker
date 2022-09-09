import React, { useState } from 'react';
import "./Main.scss";
import Card from './Card/Card.jsx';
import teamData from '../../assets/data/teamData';
import plusSign from "../../assets/images/plus-sign.png"

function Main() {
  const [newCard, addNewCard] = useState()

  const handleCards = () => {
    addNewCard(teamData.push({
      id: teamData.length+1,
      name: "NPC X",
      role: "Software Developer"
    }))
  }
  
  return (
    <div className='main-container'>
      {teamData.map((employee)=>{
        return (<Card key={employee.id} data={employee}/>)
      })}
      <div className='main-container__addcard'>
        <img onClick={handleCards} className='main-container__addcard--img' src={plusSign} alt="plus-sign" width="100px" />
      </div>
    </div>
  )
}

export default Main