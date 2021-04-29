import React from "react";

// Display only component
export default function Review(props) {
  return (
    <div id="bookContainer">
      <h1>
        {props.result.title} by {props.result.author}
      </h1>
      <h2>
        {props.result.stars} stars <br />
        {props.result.review}
      </h2>
    </div>
  );
}
