import React, { useState } from 'react';

const birdCard = (props) => {
    const [count, setCount] = useState(0);
    console.log('props: ', props)
    return (
            <div>

                <article className="birdPage">
                    <div className="birdCard">
                        <div className="box">
                            <figure className="birdImg">
                                <img src={props.props.imageUrl}></img>
                            </figure>

          
                            <ul className="ul">
                                <li>Name: {props.props.name}</li>
                                <li>Color: {props.props.color}</li>
                                <li>Size: {props.props.size}</li>
                                <li>Fun Fact: {props.props.fact}</li>
                                <li><button className="spotted-button" onClick={() => setCount(count + 1)}>Spotted {count} times!</button></li>
                            </ul>
                        </div>
                    </div>
                </article>
              
            </div>
    )
};
export default birdCard;
