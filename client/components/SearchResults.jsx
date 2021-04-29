import React from "react";
 
export default function SearchResults(props) {
  return (
    <div id="searchResult">
      <br />
      <img
        src={props.result.imageLinks.thumbnail}
        width="200px"
        height="269px"
      />
      <h2>
        {props.result.title} by {props.result.author}
      </h2>
      <h2>{`${props.result.pageCount} pages`}</h2>

      <button
        id="addBookButton"
        onClick={() =>
          props.addToBeRead(
            props.result.title,
            props.result.authors[0],
            props.result.pageCount,
            props.result.imageLinks.thumbnail,
            props.result.industryIdentifiers[0].identifier
          )
        }
      >
        Add to Reading List
      </button>
    </div>
  );
}

// title
// author
// page count
// cover url
