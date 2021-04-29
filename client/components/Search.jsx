import React, { useState } from "react";
import SearchResults from "./SearchResults.jsx";
import axios from "axios";

export default function Search() {
  const [searchBar, setSearchBar] = useState("");
  const [results, setResults] = useState([]);
  //
  const handleSearch = (e) => {
    setSearchBar(e.target.value);
  };

  const getBooks = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // const requestURI = encodeURI("/api/".concat(searchBar));

    // axios.get('/api/ulysses')
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchBar}&key=AIzaSyBvzRvXUMUGGeATujnaMUbaQS9dxclLbOk`
      )
      // .then((res) => JSON.parse(res))
      .then((data) => {
        if (data) {
          console.log(data.data.items);
          setResults(data.data.items);
        }
      })
      .catch((err) => {
        if (err) console.log(err);
      });
    //.then((data) => console.log(data));
    //console.log(retreiveBooks)
  };

  const renderResults = () => {
    const newResults = [];
    for (let i = 0; i < results.length; i += 1) {
      newResults.push(
        <SearchResults
          key={i}
          result={results[i].volumeInfo}
          addToBeRead={addToBeRead}
        />
      );
    }
    return newResults;
  };

  const addToBeRead = (title, author, pageCount, url, ISBN) => {
    const body = { title, author, pageCount, url, ISBN };
    axios.post("/db/addTBR", body);
  };

  return (
    <div className="bodyDiv">
      <h1 id="findBookTitle">Find a book</h1>
      <form
        id="searchBar"
        name="bookSearch"
        autoComplete="off"
        onSubmit={(e) => getBooks(e)}
      >
        <input
          type="text"
          onChange={(e) => handleSearch(e)}
          value={searchBar}
        ></input>
        <input id="button" type="submit" value="Search"></input>
      </form>
      <br />
      <br />
      <br />
      {results ? renderResults() : null}
    </div>
  );
}
