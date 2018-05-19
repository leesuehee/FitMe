import React from 'react';

let CalorieCart = (props) => (
  <div className ='calorie-cart'>
    <h4> Cart </h4>

    <h5> Remaining Calories: {this.props.calculateCalories('add', this.props.item)} </h5>   
  </div>
)

export default CalorieCart;