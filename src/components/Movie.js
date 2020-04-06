import React from "react";

const Movie = ({ movie, poster, curMovie }) => {
  return (
    <div class="card  ">
      <div class="card-image waves-effect ">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="poster"
          height="360rem"
          width="200rem"
          style={{ objectFit: "contain" }}
        ></img>
      </div>
      <div className="overlay"></div>
      <div className="ca ">
        {/*eslint-disable-next-line*/}
        <a
          href="#"
          onClick={() => curMovie(movie.id)}
          className="btn waves-effect  buton  "
        >
          more details
        </a>
      </div>
    </div>
  );
};

export default Movie;
