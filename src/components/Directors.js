import React from "react";
import { directors } from "../data";

function Directors(){
  const directorlist = directors.map((list4) => (
    <div key={list4.name}>
      <h2>{list4.name}</h2>
      <ul>
        {list4.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directorlist}
    </div>
  );
};

export default Directors;
