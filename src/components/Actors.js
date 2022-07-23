import React from "react";
import { actors } from "../data"

function Actors(){
  const actorlist = actors.map((list) => (
    <div key={list.name}>
      <h1>{list.name}</h1>
      <ul>
        {list.movies.map((list2) => (
          <li key={list2}>{list2}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Actors Page</h1>
      {actorlist}
    </div>
  );
};

export default Actors;
