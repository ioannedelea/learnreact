import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">  
      <p onClick={props.click}>I'm {props.nume} and I am {props.varsta} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.nume}/>
    </div>


  )
};


export default person;