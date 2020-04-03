import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
const dotenv = require("dotenv");

class App extends Component {
  searchText = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&query=${this.state.searchedText}&page=1`
    )
      .then(req => req.json())
      .then(res => {
        this.setState({ movies: res.results, totalPage: res.total_pages });
      });
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ searchedText: e.target.value });
  };

  nextPage = page => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&query=${this.state.searchedText}&page=${page}`
    )
      .then(req => req.json())
      .then(res => {
        console.log(res);
        this.setState({ movies: res.results, currentpage: page });
      });
  };

  constructor() {
    super();
    this.state = {
      searchedText: "",
      movies: [],
      totalPage: 0,
      currentpage: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchBar
          searchText={this.searchText}
          handleChange={this.handleChange}
        />
        <MovieList movies={this.state.movies} />
        <Pagination
          totalPage={this.state.totalPage}
          // currentpage={this.state.currentpage}
          nextPage={this.nextPage}
        />
      </div>
    );
  }
}

export default App;
