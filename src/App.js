import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Nomovie from "./components/Nomovie";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import MovieInfo from "./components/MovieInfo";
import Trending from "./components/Trending";
import Footer from "./components/Footer";
import dotenv from "dotenv";

import Loader from "./components/Loader";

class App extends Component {
  searchText = (e) => {
    const REACT_APP_API = process.env.REACT_APP_API;

    e.preventDefault();
    this.setState({ loading: true });
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API}&language=en-US&query=${this.state.searchedText}&page=1`
    )
      .then((req) => req.json())
      .then((res) => {
        this.setState({
          movies: res.results,
          totalPage: res.total_pages,
          searched: this.state.searchedText,
          searchText: "",
          loading: false,
        });
      });
  };

  handleChange = (e) => {
    this.setState({ searchedText: e.target.value });
  };

  nextPage = (page) => {
    const REACT_APP_API = process.env.REACT_APP_API;

    this.setState({ loading: true });

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API}&language=en-US&query=${this.state.searchedText}&page=${page}`
    )
      .then((req) => req.json())
      .then((res) => {
        this.setState({
          movies: res.results,
          currentpage: page,
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

  remNewFav = () => {
    this.setState({ newFav: 0 });
  };

  closeCurrent = (id) => {
    this.setState({ currentMovie: null });
  };

  svgCol = (movi) => {
    let favo = false;
    let index = 0;
    let ii = 0;
    let newFavCount = this.state.newFav;

    this.state.favMov.forEach(function (mov, i) {
      if (mov.id === movi.id) {
        console.log(movi, mov);
        console.log("ii", index);
        index = ii;
        return (favo = true);
      }
      ii++;
    });
    console.log("index", index);
    favo === true ? newFavCount-- : newFavCount++;
    this.setState({
      newFav: newFavCount,
    });
    console.log("favcount", newFavCount);
    favo === true
      ? this.state.favMov.splice(index, 1)
      : this.setState({
          favMov: [...this.state.favMov, movi],
          tmovies: [...this.state.tmovies],
          newFav: newFavCount,
        });
  };

  constructor() {
    super();
    this.state = {
      searchedText: "",
      searched: "",
      movies: [],
      totalPage: 0,
      currentpage: 0,
      currentMovie: null,
      tmovies: [],
      loading: true,
      favMov: [],
      newFav: 0,
    };
  }
  componentDidMount() {
    const REACT_APP_API = process.env.REACT_APP_API;

    const getTrend = () => {
      this.setState({ loading: true });

      fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${REACT_APP_API}&page=1`
      )
        .then((req) => req.json())
        .then((res) => {
          this.setState({ tmovies: res.results, loading: false });
        });
    };
    getTrend();
    setInterval(
      () =>
        this.setState({
          favMov: [...this.state.favMov],
          newFavCount: this.state.newFavCount,
        }),
      500
    );
  }

  render() {
    return (
      <div className="App">
        <Nav
          favMov={this.state.favMov}
          remFav={this.remFav}
          newFav={this.state.newFav}
          remNewFav={this.remNewFav}
        />
        {this.state.movies.length !== 0 ? (
          <div>
            {this.state.currentMovie == null ? (
              <div>
                <SearchBar
                  searchText={this.searchText}
                  handleChange={this.handleChange}
                />
                {this.state.loading ? (
                  <Loader />
                ) : (
                  <div>
                    <MovieList
                      movies={this.state.movies}
                      curMovie={this.curMovie}
                      svgCol={this.svgCol}
                      favMov={this.state.favMov}
                      close={this.close}
                    />
                    <Pagination
                      totalPage={this.state.totalPage}
                      // currentpage={this.state.currentpage}
                      nextPage={this.nextPage}
                    />
                  </div>
                )}
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
                {this.state.searched !== "" && this.state.totalPage == 0 ? (
                  <Nomovie
                    searchText={this.searchText}
                    handleChange={this.handleChange}
                    close={this.close}
                    loading={this.state.loading}
                  />
                ) : (
                  <div>
                    <SearchBar
                      searchText={this.searchText}
                      handleChange={this.handleChange}
                    />
                    <h1>TRENDING MOVIES OF THE DAY</h1>
                    {this.state.loading ? (
                      <Loader />
                    ) : (
                      <div>
                        <Trending
                          tmovies={this.state.tmovies}
                          curMovie={this.curMovie}
                          svgCol={this.svgCol}
                          favMov={this.state.favMov}
                        />
                      </div>
                    )}
                  </div>
                )}
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
