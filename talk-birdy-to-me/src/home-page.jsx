import React from 'react';



const homePage = (props) => {
    return (
        <div className="container">
            <div className="homepage">
        <div className="title">
            <h1>Talk Birdy to Me!</h1>
        </div>
        <div className="birdColorQuestion">What color is the bird?</div>
            <div className="button-div">
                <ul>
                   <li><button><img src="../components/blue-bird.png" className='img' onClick={() => { props.handleChange('blue') }}/></button></li>
                   <li><button><img src="../components/brown-bird.png" className='img' onClick={() => { props.handleChange('brown') }}/></button></li>
                   <li><button><img src="../components/black-bird.png" className='img' onClick={() => { props.handleChange('black') }}/></button></li>
                   <li><button><img src="../components/gray-bird.png" className='img' onClick={() => { props.handleChange('gray') }}/></button></li>
                   <li><button><img src="../components/red-bird.png" className='img' onClick={() => { props.handleChange('red') }}/></button></li>
                </ul>
            </div>
            </div>
            <footer>'Are birds drones?'  - Voyage, Inc.</footer>
        </div>
    )
}

export default homePage;