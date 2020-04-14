import Movie from "./Movie";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from "react";
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
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // renderButtonGroupOutside={true}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={1000}
        centerMode={true}
        focusOnSelect={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {this.props.tmovies.map((movie, i) => {
          return (
            <div>
              <Movie
                movie={movie}
                key={i}
                poster={movie.poster_path}
                curMovie={this.props.curMovie}
                svgCol={this.props.svgCol}
                favMov={this.props.favMov}
                favorite={this.props.favorite}
              />
            </div>
          );
        })}
      </Carousel>
    );
  }
}
export default Trending;
