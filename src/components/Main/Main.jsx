import React, { useState } from 'react';
import "./Main.scss";
import Card from './Card/Card.jsx';
// Fetching data to use for the cards
import teamData from '../../assets/data/teamData';
import plusSign from "../../assets/images/plus-sign.png"

function Main() {
  // useState for adding new cards on click
  const [newCard, addNewCard] = useState()

  const handleCards = () => {
    addNewCard(teamData.push({
      id: teamData.length+1,
      name: "NPC #" + (teamData.length+1),
      role: "Software Developer"
    }))
  }
  
  return (
    // Main div responsible for generating and displaying the cards
    <div className='main-container'>
      {teamData.map((employee)=>{
        // Passing teamData as props to the card component
        return (<Card key={employee.id} data={employee}/>)
      })}
      <div className='main-container__addcard'>
        <img onClick={handleCards} className='main-container__addcard--img' src={plusSign} alt="plus-sign" width="100px" />
      </div>
    </div>
  )
}

export default Main