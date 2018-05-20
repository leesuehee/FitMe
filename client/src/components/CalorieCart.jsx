import React from 'react';

let CalorieCart = (props) => (
  <div className ='calorie-cart'>
    <h3> Cart </h3>
    {props.items.map(food => 
      <ul> {food.name} {food.cal} calories 
        <button onClick={()=>props.remove(food)}> REMOVE </button>
      </ul>   
    )}
  </div>
)

export default CalorieCart;