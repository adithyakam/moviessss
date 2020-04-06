// import React from "react";
import Movie from "./Movie";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "materialize-css";
// import { Button, Card, Row, Col } from "react-materialize";

// const Trending = ({ tmovies, curMovie }) => {
//   return (
//     <div className="container">
//       <h1>TRENDING</h1>
//       <div className="row">
//         <div className="col s12">
//           {tmovies.map((movie, i) => {
//             return (
//               <div class="col s12 m6 l3 ">
//                 <Movie
//                   movie={movie}
//                   key={i}
//                   poster={movie.poster_path}
//                   curMovie={curMovie}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trending;

// // import React, { Component }

import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

// var Carousel = require("react-responsive-carousel").Carousel;

// import Carousel from "react-responsive-carousel";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
class Trending extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        renderButtonGroupOutside={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        centerMode={true}
        focusOnSelect={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p> */}
        {this.props.tmovies.map((movie, i) => {
          return (
            <div>
              <Movie
                movie={movie}
                key={i}
                poster={movie.poster_path}
                curMovie={this.props.curMovie}
              />
            </div>
          );
        })}
      </Carousel>
    );
  }
}
export default Trending;
