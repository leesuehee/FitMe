import React from 'react';

let CalorieCart = (props) => (
  <div className ='calorie-cart'>
    <h3> Cart </h3>
    {props.items.map(food => 
      <ul> {food.name} {food.cal} calories 
        <button onClick={()=>props.remove(food)}> REMOVE </button>
      </ul>   
    )}

    <h3> Remaining Calories: {props.remaining} </h3>
    <p> TIP : add a tip here explaining how BMR works </p>
  </div>
)

export default CalorieCart;