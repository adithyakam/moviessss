import React from "react";

const MovieInfo = ({ currentMovie, closeCurrent }) => {
  return (
    <div className="container ">
      <div className="row ">
        <div>
          <span
            className="home"
            onClick={() => {
              closeCurrent();
            }}
            style={{ fontSize: "1.5rem" }}
          >
            <i class="tiny material-icons">arrow_back</i>
            Back
          </span>
        </div>
        <div className="mar row">
          <div className="Image col s12 m4 l5 ">
            <img
              src={
                currentMovie.poster_path == null
                  ? "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
                  : `https://image.tmdb.org/t/p/w342${currentMovie.poster_path}`
              }
              alt="poster"
              height="360rem"
              width="250rem"
              style={{ objectFit: "contain" }}
            ></img>
          </div>
          <div className="movieInfo col s12 m8 l7  "></div>

          <div>
            <span className="mov-title ">{currentMovie.title} </span>
            <div>
              {/* <span className="desc ">Overview </span> */}
              <p className="left-align mar">{currentMovie.overview}</p>
            </div>
            <div className="col s12 m6 ">
              <div>
                <div className="desc">Releaase Date </div>
                <div>
                  <p>{currentMovie.release_date}</p>
                </div>
              </div>
              <div>
                <div className="desc">AVG-Vote </div>
                <p>{currentMovie.vote_average}</p>
              </div>
              <div>
                <div className="desc">Releaase Date </div>
                <p>{currentMovie.release_date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
