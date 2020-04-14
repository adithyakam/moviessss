import React from "react";
import M from "materialize-css";

const Nav = ({ favMov }) => {
  {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, {
        constrainWidth: false,
        alignment: "right",
        coverTrigger: false,
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
          Drop Me!
        </a>

        {/* <!-- Dropdown Structure --> */}
        <ul id="dropdown1" class="dropdown-content collection">
          {favMov.map((fav, i) => {
            return <li>{fav.title}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
