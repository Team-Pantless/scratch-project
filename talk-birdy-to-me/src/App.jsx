import React, { Component } from 'react';
import { render } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
// import birdfunc from '../birdFunc';
// import Birds from '../Components/birdData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    //this should render the birds in the database that are blue;
    if (this.state.value === 'null' || this.state.value === '') {
      alert('Please pick a color!')
    }
    else {
      event.preventDefault();
      console.log('A bird color was submitted: ' + this.state.value);
      // birdFunc();
    }
  }
  
   

  render() {
    return (

      < div className="container">
        <div className="title">
          <h1>Talk Birdy to Me!</h1>
          </div>
         <div className="birdColorForm">
        <form onSubmit={this.handleSubmit}>
          <label>What color is the bird? 
            <select className="form-box" value={this.state.value} onChange={this.handleChange}>
                <option value="null">Pick a color</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="brown">Brown</option>
                <option value="grey">Grey</option>
                <option value="black">Black</option>
            </select>    
          </label>
          <input type="submit" value="submit" />
          </form>
          </div>
        </div >

    );
  }
}
export default App;


{/* <i class="fas fa-feather-alt"></i> */}