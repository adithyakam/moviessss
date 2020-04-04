import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import MovieInfo from "./components/MovieInfo";
import Trending from "./components/Trending";

class App extends Component {
  searchText = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&query=${this.state.searchedText}&page=1`
    )
      .then(req => req.json())
      .then(res => {
        // console.log("lengthBef", this.state.movies.length);

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

  curMovie = id => {
    if (this.state.movies.length !== 0) {
      this.state.movies.forEach(movie => {
        if (movie.id === id) {
          this.setState({ currentMovie: movie });
        }
      });
    } else {
      this.state.tmovies.forEach(movie => {
        if (movie.id === id) {
          this.setState({ currentMovie: movie });
        }
      });
    }
  };

  closeCurrent = id => {
    this.setState({ currentMovie: null });
  };

  constructor() {
    super();
    this.state = {
      searchedText: "",
      movies: [],
      totalPage: 0,
      currentpage: 0,
      currentMovie: null,
      tmovies: []
    };
  }
  componentDidMount() {
    const getTrend = () => {
      fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API}&page=1`
      )
        .then(req => req.json())
        .then(res => {
          this.setState({ tmovies: res.results });
          console.log(this.state.tmovies);
        });
    };
    getTrend();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.movies.length !== 0 ? (
          <div>
            {this.state.currentMovie == null ? (
              <div>
                <SearchBar
                  searchText={this.searchText}
                  handleChange={this.handleChange}
                />
                <MovieList
                  movies={this.state.movies}
                  curMovie={this.curMovie}
                />
                <Pagination
                  totalPage={this.state.totalPage}
                  // currentpage={this.state.currentpage}
                  nextPage={this.nextPage}
                />
              </div>
            ) : (
              <div>
                <MovieInfo
                  currentMovie={this.state.currentMovie}
                  closeCurrent={this.closeCurrent}
                />
              </div>
            )}
          </div>
        ) : (
          <div>
            {this.state.currentMovie == null ? (
              <div>
                <SearchBar
                  searchText={this.searchText}
                  handleChange={this.handleChange}
                />
                <Trending
                  tmovies={this.state.tmovies}
                  curMovie={this.curMovie}
                />
              </div>
            ) : (
              <div>
                <MovieInfo
                  currentMovie={this.state.currentMovie}
                  closeCurrent={this.closeCurrent}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
