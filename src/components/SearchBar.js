import React from "react";

const SearchBar = ({ searchText, handleChange }) => {
  return (
    <div class="container">
      <div class="row">
        <section class="col s7 offeset-6">
          <form onSubmit={searchText}>
            <div className="input-field col s12">
              <input
                id="text"
                type="text"
                placeholder="Search Movie"
                onChange={handleChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchBar;
