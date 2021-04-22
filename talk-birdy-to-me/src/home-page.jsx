import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const homePage = () => {
    return (
        <div className="container">
        <div className="title">
            <h1>Talk Birdy to Me!</h1>
        </div>
        <div className="birdColorQuestion">What color is the bird?</div>
        <div className="button-div">
            <button className='blue-button' onClick={() => { handleChange('Blue') }} >Blue Button</button>
            <button className='red-button' onClick={() => { handleChange('Red') }}>Red Button</button>
        </div>
        </div >
    )
}

export default homePage;