import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import birdCard from './birdCard.jsx';
import data from '../data/birdDB.json';
// import createPalette from '@material-ui/core/styles/createPalette';
// import birdfunc from './birdFunc.jsx';
// import Birds from '../Components/birdData';

const db = data.birds;
console.log(db)

function App()  {
  const [color, setColor] = useState('no color yet');

  useEffect(() => {
    // alert('this happened')
    console.log('rendered', color);
    
    //add in conditions to check if setColor is udpated and render accordingly
    if (color !== 'no color yet') {
      // console.log(`inside ${color} conditional`);
      return birdCard(color);
    }
  })

  const handleChange = value => {
    setColor(value);
  }

  const birdCard = color => {
    console.log(`inside bird card`)
    }

//   const birdFunc = props => {
//     <h2>{ props.value }</h2>
// }
  
  if (color === 'no color yet') {
    return (
      < div className="container">
        <div className="title">
          <h1>Talk Birdy to Me!</h1>
        </div>
        <div className="birdColorQuestion">What color is the bird?</div>
        <div className="button-div">
          <button className='blue-button' onClick={() => { handleChange('blue') }} >Blue Button</button>
          <button className='red-button' onClick={() => { handleChange('red') }}>Red Button</button>
        </div>
      </div >
    );
  }
  if (color === 'blue') {
    return (
      <div className="container">
        <div className="title">Blue Div</div>
        <div>
          <box className="box">{color} {db.size}</box>
        </div>
        </div>
    );
  }
}

// const handleChange = event => {

//   }

// const handleSubmit = event => {
//     //this should render the birds in the database that are blue;
//     if (color === '') {
//       alert('Please pick a color!')
//     }
//     else {
//       event.preventDefault();
//       console.log('A bird color was submitted: ' + color);
//       // birdFunc();
//     }
//   }
  
export default App;


{/* <i class="fas fa-feather-alt"></i> */}