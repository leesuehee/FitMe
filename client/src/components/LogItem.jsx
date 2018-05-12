import React from 'react';

const LogItem = (props) => (
  <div className='item-info'>
    {this.props.foodItem.map(item => {
      <ul> {console.log(item)} </ul>
      })
    }
    
  </div>
)

export default LogItem;

// <div className ='name'> {props.item} </div>
// <div className ='calories'> {props.calories} </div>

// <div className ='img'>
//   <img src={props.img}/>
// </div>