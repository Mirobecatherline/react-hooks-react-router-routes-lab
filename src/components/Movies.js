import React from "react";
import { movies } from "../data";

function Movies(){
  const movieItems = movies.map((list) => (
    <div key={list.title}>
      <h2>{list.title}</h2>
      <p>{list.time}</p>
      <ul>
        {list.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  );
};

export default Movies;
