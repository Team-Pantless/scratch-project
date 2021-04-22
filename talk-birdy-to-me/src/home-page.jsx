import React from 'react';


const homePage = (props) => {
    return (
        <div className="container">
        <div className="title">
            <h1>Talk Birdy to Me!</h1>
        </div>
        <div className="birdColorQuestion">What color is the bird?</div>
        <div className="button-div">
            <button className='blue-button' onClick={() => { props.handleChange('blue') }} >Blue</button>
            <button className='brown-button' onClick={() => { props.handleChange('brown') }}>Brown</button>
            <button className='black-button' onClick={() => { props.handleChange('black') }}>Black</button>
                <button className='gray-button' onClick={() => { props.handleChange('gray') }}>Gray</button>
                 <button className='red-button' onClick={() => { props.handleChange('red') }}>Red</button>
        </div>
        </div>
    )
}

export default homePage;