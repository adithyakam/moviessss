import React from "react";
import Movie from "./Movie";
import "materialize-css";
import { Button, Card, Row, Col } from "react-materialize";

const Trending = ({ tmovies, curMovie }) => {
  return (
    <div className="container">
      <h1>TRENDING</h1>
      <div className="row">
        <div className="col s12">
          {tmovies.map((movie, i) => {
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

export default Trending;

// import React, { Component }
