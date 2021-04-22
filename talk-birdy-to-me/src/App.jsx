import React, { useState, useEffect } from 'react';
import data from '../data/birdDB.json';
import HomePage from './home-page.jsx';
import BirdCard from './birdCard.jsx';


const db = data.birds;

function App()  {
  const [color, setColor] = useState('no color yet');


  useEffect(() => {

    console.log('rendered', color);
    
    if (color !== 'no color yet') {

      return birdCard(color);
    }
  })

  const handleChange = value => {
    setColor(value);
  }

  const birdCard = color => {
    console.log(`inside bird card`);
  }
  
  if (color === 'no color yet') {
    return (
      <HomePage handleChange={ handleChange } />
    );
  }
  else {
    console.log('database: ', db[0].color)
    console.log('color check', color)

    
    //use filter to get the objects we want
    const birdList = db.filter(el => el.color === color);
    console.log('birdList: ', birdList)
    return (
      <div className="container">   <div className="title"><h1>{color} birds </h1></div>
      
        <div>
          {birdList.map((el) => (
            <BirdCard props={el} key={ el.name } />
        ))}</div>
        <button className='return-button' onClick={() => { handleChange('no color yet') }}>Return home</button>
        <footer>'Are birds drones?'  - Voyage, Inc.</footer>   
        </div>
    );
  }
}

  
export default App;