import React from 'react';
import "./Main.scss";
import Card from './Card/Card.jsx';
import teamData from '../../assets/data/teamData';
import background from "../../assets/images/background.jpg"

function Main() {
  
  return (
    <div className='main-container'>
      <img src={background} alt="background" className='main-container__background--img'/>
      {teamData.map((employee)=>{
        return (<Card key={employee.id} data={employee}/>)
      })}
    </div>
  )
}

export default Main