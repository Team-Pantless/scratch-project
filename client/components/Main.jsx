// import React from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Main() {
  const [quote, setQuote] = useState([]);

  useEffect(async () => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data[Math.floor(Math.random() * 99)]);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);

  console.log(quote);
  return (
    <div className="bodyDiv">
      <h2 id="welcome">Welcome back to Better Reads!</h2>
      <div id="randomQuoteContainer">
        <ul id="randomQuote">
          <li id="randomText">{`"${quote.text}"`}</li>
          <li id="author">{`- ${quote.author}`}</li>
        </ul>
      </div>
    </div>
  );
}
