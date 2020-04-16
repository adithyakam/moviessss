import React from "react";
import SearchBar from "./SearchBar";
import Loader from "./Loader";

const Nomovie = ({ searchText, handleChange, close, loading }) => {
  return (
    <div className="container">
      <SearchBar searchText={searchText} handleChange={handleChange} />
      {loading ? <Loader /> : <h1>cant find movie</h1>}
    </div>
  );
};

export default Nomovie;
