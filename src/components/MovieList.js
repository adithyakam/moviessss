import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, curMovie, svgCol, favMov, close }) => {
  return (
    <div className="container">
      <span
        className="home"
        onClick={() => {
          close();
        }}
        style={{ fontSize: "1.5rem" }}
      >
        <i class="tiny material-icons">arrow_back</i>
        Back
      </span>
      {movies.length == 0 ? (
        <h1>No movies found </h1>
      ) : (
        <div className="row">
          <div className="col s12">
            {movies.map((movie, i) => {
              return (
                <div class="col s12 m4 l3 ">
                  <Movie
                    movie={movie}
                    key={i}
                    poster={movie.poster_path}
                    curMovie={curMovie}
                    svgCol={svgCol}
                    favMov={favMov}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
