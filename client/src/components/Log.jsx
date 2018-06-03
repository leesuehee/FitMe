import React from 'react';
import axios from 'axios';
import LogItem from './LogItem.jsx';
import CalorieCart from './CalorieCart.jsx';
import ExerciseCart from './ExerciseCart.jsx';

import * as pw from '../../../env.js';

class Log extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search   : null,
      minutes  : null,
      cart     : [],
      remaining: this.props.userStats.BMR,
      foodItem : null,
    } 
  }
  
  async searchForItems () {
    try {
      let response = await axios({
        method:'post',
        url:'https://trackapi.nutritionix.com/v2/natural/nutrients',
        headers: {
          'x-app-id' : pw.default.ID,
          'x-app-key': pw.default.KEY,
          'x-remote-user-id' : '0',
        },
        data: {
          'query' : String(this.state.search)
        }
      })

      let foodItem = response.data;   

      this.setState({
        foodItem  :   foodItem,
        search    :   null,
      })
    } catch (error) { console.log(error) }
  }

  handleChange (event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  addItemToCart () {
    let itemObj = {
      name  :  this.state.foodItem.foods[0].food_name,
      cal   :  this.state.foodItem.foods[0].nf_calories
    }
    let subtractCal = this.state.remaining - this.state.foodItem.foods[0].nf_calories;
    let addToCart = this.state.cart;
    addToCart.push(itemObj);
    
    this.setState({
      cart      : addToCart,
      remaining : subtractCal
    })
  }

  removeItemFromCart (item) {
    let removeFromCart = this.state.cart;
    let index = this.state.cart.indexOf(item);
    let adjustedCal = this.state.remaining + item.cal;

    removeFromCart.splice(index,1);

    this.setState({
      cart      : removeFromCart,
      remaining : adjustedCal
    })
  }
  saveCalCart () {
  }
  
  exerciseInMin (event) {
    console.log(parseInt(event.target.name) );
    this.setState({
      [event.target.name] : event.target.value
    })
    // saves the listed items time stamped unto the database
  }
  
  setMinutes (num) {
    this.setState({
      minutes : num
    })
  }

  saveExerciseCart () {
    // same as saveCalCart but for exercises
  }

  render () {
    return (
      <div className="user-entry">
        <div className='user-stats'>
          <h2> {this.props.userStats.name}'s log </h2>
            <h3> WEIGHT: {this.props.userStats.weight} </h3>
            <h3> GOAL: {this.props.userStats.goal} </h3>
            <h3> BMI: {this.props.userStats.BMI} </h3>
            <h3> BMR: {this.props.userStats.BMR} </h3>

            <h3> {this.props.userStats.togo}lbs TO GO! </h3>
        </div>
        
        <div className='bmi-chart'>
          {/* <img src="https://www.oyeviral.com/upload/media/posts/2017-08/09/dont-use-body-mass-index-to-determine-whether-people-are-healthy_1502264013-b.jpg"/> */}
        </div>

        <div className="food-search">
          Search food:
          <input type="text" name="search" onChange={this.handleChange.bind(this)}/>
          <button onClick={() => this.searchForItems()}> SEARCH </button>
          <button onClick={() => this.addItemToCart()}> ADD TO CART </button>
        </div>
       
        {(this.state.foodItem)?
          <LogItem info={this.state.foodItem}/>:<div></div>
        }

        <div className='carts'>
          <CalorieCart items={this.state.cart} 
            remove={this.removeItemFromCart.bind(this)}
            remaining={this.state.remaining}
          />

          <ExerciseCart setMinutes={this.setMinutes.bind(this)}
            exerciseInMin={this.exerciseInMin.bind(this)}
          />
          <button onClick={() => this.saveCart()}> SAVE CART </button>
        </div>

      </div>
    )
  }
}

export default Log;
