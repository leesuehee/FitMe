import React from 'react';

const LogItem = (props) => (

  <div className='item-info'>
    <ul className='name'>{props.info.foods[0].food_name}</ul>
    <ul className='cal'>calories {props.info.foods[0].nf_calories}</ul>
  <div className='item-img'>
    <img src={props.info.foods[0].photo.thumb}/>
  </div>
  </div>
)

export default LogItem;





