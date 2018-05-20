import React from 'react';

let CalorieCart = (props) => (
  <div className ='calorie-cart'>
    <h4> Cart </h4>
    
    <button onClick={() => props.addItem()}> ADD </button>
    <button> REMOVE </button>
  </div>
)

export default CalorieCart;
// {(props.item !== undefined)?
// <h5> Remaining Calories: {props.calculate('add', props.item)} </h5>:
// <div></div>   
// }