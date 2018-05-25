// for exercise cart
import React from 'react';

let exerciseCart = (props) => (

  <div className='exercise-info'>
    <ul className='exercise-info'></ul>
    <ul className='exercise-cal'></ul>
    <div className='exercise-duration'>
      Duration (min):
      <input type='text' name='minutes' onChange={props.exerciseInMin(this)}/>
      <button onClick={() => props.setMinutes()}></button>
    </div>
  </div>
)

export default exerciseCart;