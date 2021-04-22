import React, { useState, useEffect } from 'react';
import data from '../data/birdDB.json';
import HomePage from './home-page.jsx'


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

    let birdObj;
    for (let i = 0; i < db.length; i++) {
      if (db[i].color === color) {
        birdObj = Object.values(db[i]);
      }
    }
    
    //use filter to get the objects we want
    const birdList = db.filter(el => el.color === color);
    return (
      <div className="container">   <div className="title"><h1>{color} birds </h1></div>
        <div>
          {birdList.map((el, i) => (
        <article className="birdPage" key={`birdCard${i}`}>
        <div className="birdCard">
                <div className="box">
                  <figure className="birdImg">
            <img src={el.imageUrl}></img>
            </figure>

          
            <ul className="ul">
              <li>Name: {el.name}</li>
              <li>Color: {el.color}</li>
              <li>Size: {el.size}</li>
              <li>Fun Fact: {el.fact}</li>
            </ul>
          </div>
        </div>
        </article>
    
        ))}</div>
        <button className='return-button' onClick={() => { handleChange('no color yet') }}>Return home</button>

        </div>
    );
  }
}

  
export default App;