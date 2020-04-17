import React from "react";
import M from "materialize-css";

const Nav = ({ favMov, remFav, newFav, remNewFav }) => {
  {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, {
        constrainWidth: false,
        coverTrigger: false,
        alignment: "right",
        container: true,
      });
    });
  }
  return (
    <nav>
      <div className="nav-wrapper ">
        {/*eslint-disable-next-line*/}
        <a href="./App.js" className="brand-logo ">
          Moviesss
        </a>
        <a
          className="dropdown-trigger btn "
          href="#"
          data-target="dropdown1"
          style={{ marginLeft: "auto" }}
          onClick={() => {
            remNewFav();
            document.querySelector("#badge").classList.remove("new");
            document.querySelector("#badge").classList.remove("badge");
            document.querySelector("#badge").classList.remove("blue");
          }}
        >
          Favorites
        </a>

        <ul id="dropdown1" className="dropdown-content right ">
          {favMov.map((fav, i) => {
            return (
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {fav.title}
                <span
                  onClick={() => {
                    remFav(fav);
                  }}
                >
                  <i className="large material-icons">delete</i>
                </span>
                <span class="new badge"></span>
              </li>
            );
          })}
        </ul>
      </div>
      <span
        className={newFav > 0 ? "new badge blue" : ""}
        style={newFav > 0 ? { display: "block" } : { display: "none" }}
        id="badge"
      >
        {newFav}
      </span>
    </nav>
  );
};

export default Nav;
