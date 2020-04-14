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
            style={{ fontSize: "2rem" }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="home"
              class="svg-inline--fa fa-home fa-w-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 180"
              width="15"
              height="25"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path>
            </svg>
            Home
          </span>
        </div>
        <div className="mar row">
          <div className="Image col s12 m4 l5 ">
            <img
              src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
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
