import React from 'react';
import "./Main.scss";
import Card from './Card/Card.jsx';
import teamData from '../../assets/data/teamData';

function Main() {
  
  return (
    <div className='main-container'>
      {teamData.map((employee)=>{
        return (<Card key={employee.id} data={employee}/>)
      })}
    </div>
  )
}

export default Main