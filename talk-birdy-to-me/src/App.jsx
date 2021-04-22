import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import birdCard from './birdCard.jsx';
import data from '../data/birdDB.json';
import homePage from './home-page.jsx'
// import createPalette from '@material-ui/core/styles/createPalette';
// import birdfunc from './birdFunc.jsx';
// import Birds from '../Components/birdData';

const db = data.birds;

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
    console.log(`inside bird card`);
  }



//   const birdFunc = props => {
//     <h2>{ props.value }</h2>
// }
  
  if (color === 'no color yet') {
    return (
      homePage()
  
    );
  }
  else {
      console.log(db[0])
    return (
      <article className="birdCard">
        <div className="title">{color} Div</div>
        <div className="box">{color} {db[0].size}</div>
      </article>
        
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