import React from 'react';
import ReactDOM from 'react-dom';
import Log from './components/Log.jsx';
// import Goal from './components/Goal.jsx';
// import BMI from './components/BMI.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      stats      :   true,
      log        :   false,

      name       :   'Sue',
      heightft   :   '5',
      heightin   :   '6',
      weight     :   '130',
      BMI        :   '21',

      gender     :   'Female',
      age        :   '23',
      BMR        :   '1422',
      goal       :   '120',
      togo       :    10
    }
  } 

  setStat () {
    let ft = this.state.heightft;
    let inch = this.state.heightin;
    let totalHeight = parseInt(ft)*12 + parseInt(inch);
    let w = parseInt(this.state.weight);
    let bmi = (w/totalHeight/totalHeight)*703;
    let age = parseInt(this.state.age);
    let bmr
    let togo = w - parseInt(this.state.goal);
    
    switch (this.state.gender) {
      case "Female":
        bmr = 655 + (4.35 * w ) + (4.7 * totalHeight) - (4.7 * age);
        break; 
      case "Male":
        bmr = 66 + (6.23 * w ) + (12.7 * totalheight) - (6.8 * age);
        break;
    }

    this.setState({
      stats      :    true,
      BMI        :    bmi,
      BMR        :    bmr,
      togo       :    togo
    });
  }

  handleChange (event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    if (this.state.stats) {
      return (
        <div className ='app-started'>
          <h3> FITNESS++</h3>
          <Log userStats={this.state}/>
        </div>
      )
    } else {
      return (
        <div className='app-container'>
          <h3>WELCOME TO FITNESS++</h3>
          <h4>LET'S GET STARTED!</h4>
            <div className='goals'>
              Name:
              <input type="text" name="name" onChange={this.handleChange.bind(this)} />
              Goal weight (lb):
              <input type="text" name="goal" onChange={this.handleChange.bind(this)} />
              Weight (lb):
              <input type="text" name="weight" onChange={this.handleChange.bind(this)}/>
              Height (ft):
              <input type="text" name="heightft" onChange={this.handleChange.bind(this)}/>
              Height (in):
              <input type="text" name="heightin" onChange={this.handleChange.bind(this)}/>
              Age (year):
              <input type="text" name="age" onChange={this.handleChange.bind(this)}/>

              <select name='gender'onChange={this.handleChange.bind(this)}>
                <option>Male</option>
                <option defaultValue>Female</option>
              </select>

              <button onClick={() => this.setStat()}> SUBMIT </button>
            </div>
        </div>
      )
    } 
  }
}

ReactDOM.render(<App />, document.getElementById('app'));