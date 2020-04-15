import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import MovieInfo from "./components/MovieInfo";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

class App extends Component {
  searchText = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&query=${this.state.searchedText}&page=1`
    )
      .then((req) => req.json())
      .then((res) => {
        this.setState({ movies: res.results, totalPage: res.total_pages });
      });
  };

  handleChange = (e) => {
    this.setState({ searchedText: e.target.value });
  };

  nextPage = (page) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&query=${this.state.searchedText}&page=${page}`
    )
      .then((req) => req.json())
      .then((res) => {
        this.setState({
          movies: res.results,
          currentpage: page,
          searchedText: "",
        });
      });
  };

  curMovie = (id) => {
    if (this.state.movies.length !== 0) {
      this.state.movies.forEach((movie) => {
        if (movie.id === id) {
          this.setState({ currentMovie: movie });
        }
      });
    } else {
      this.state.tmovies.forEach((movie) => {
        if (movie.id === id) {
          this.setState({ currentMovie: movie });
        }
      });
    }
  };

  remFav = (movi) => {
    console.log("workins");
    this.state.favMov.splice(this.state.favMov.indexOf(movi), 1);
  };

  close = () => {
    this.setState({ movies: [] });
  };

  closeCurrent = (id) => {
    this.setState({ currentMovie: null });
  };

  svgCol = (movi) => {
    let favo = false;
    this.state.favMov.forEach(function (mov) {
      if (mov.id === movi.id) {
        return (favo = true);
      }
    });
    favo == true
      ? this.state.favMov.splice(this.state.favMov.indexOf(movi), 1)
      : this.setState({
          favMov: [...this.state.favMov, movi],
          tmovies: [...this.state.tmovies],
        });
  };

  constructor() {
    super();
    this.state = {
      searchedText: "",
      movies: [],
      totalPage: 0,
      currentpage: 0,
      currentMovie: null,
      tmovies: [],
      favorite: false,
      favMov: [{}],
    };
  }
  componentDidMount() {
    const getTrend = () => {
      fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API}&page=1`
      )
        .then((req) => req.json())
        .then((res) => {
          this.setState({ tmovies: res.results });
        });
    };
    getTrend();
    setInterval(() => this.setState({ favMov: [...this.state.favMov] }), 500);
  }

  render() {
    return (
      <div className="App">
        <Nav favMov={this.state.favMov} remFav={this.remFav} />
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
                  svgCol={this.svgCol}
                  favMov={this.state.favMov}
                  favorite={this.state.favorite}
                  close={this.close}
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
                <h1>TRENDING MOVIES OF THE DAY</h1>
                <Trending
                  tmovies={this.state.tmovies}
                  curMovie={this.curMovie}
                  svgCol={this.svgCol}
                  favMov={this.state.favMov}
                  favorite={this.state.favorite}
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
        <Footer className="footer" />;
      </div>
    );
  }
}

export default App;
