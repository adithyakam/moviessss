import React from "react";

const Movie = ({ movie, poster }) => {
  return (
    <div class="col s12 m6 l3">
      <div class="card">
        <div class="card-image waves-effect ">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            height="360rem"
            width="200rem"
            style={{ objectFit: "contain" }}
          ></img>
        </div>
        <div class="card-action">
          <a href="#">moredetails</a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
