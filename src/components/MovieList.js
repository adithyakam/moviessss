import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, curMovie }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {movies.map((movie, i) => {
            return (
              <div class="col s12 m6 l3 ">
                <Movie
                  movie={movie}
                  key={i}
                  poster={movie.poster_path}
                  curMovie={curMovie}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
