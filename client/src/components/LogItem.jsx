import React from 'react';

const LogItem = (props) => (

  <div className='item-info'>
    <ul className='name'>{props.info.foods[0].food_name}</ul>
    <ul className='cal'>{props.info.foods[0].nf_calories}</ul>
    
  </div>
)

export default LogItem;

// <div className ='name'> {props.item} </div>
// <div className ='calories'> {props.calories} </div>

// <div className ='img'>
//   <img src={props.img}/>
// </div>