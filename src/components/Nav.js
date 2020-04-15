import React from "react";
import M from "materialize-css";

const Nav = ({ favMov, remFav }) => {
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
      <div
        class="nav-wrapper"
        style={{
          margin: "2px 2px 2px 2px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/*eslint-disable-next-line*/}
        <a href="./App.js" class="brand-logo left">
          Moviesss
        </a>
        <a
          class="dropdown-trigger btn "
          href="#"
          data-target="dropdown1"
          style={{ marginLeft: "auto" }}
        >
          Favorites
        </a>

        <ul id="dropdown1" class="dropdown-content right">
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
                  <i class="large material-icons">delete</i>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
