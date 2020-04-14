import React from "react";
import M from "materialize-css";

const Nav = () => {
  {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, {});
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
          backgroundColor: "blue",
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
        <ul id="dropdown1" class="dropdown-content right">
          <li>
            <a href="#!">one</a>
          </li>
          <li>
            <a href="#!">two</a>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <a href="#!">three</a>
          </li>
          <li>
            <a href="#!">
              <i class="material-icons">view_module</i>four
            </a>
          </li>
          <li>
            <a href="#!">
              <i class="material-icons">cloud</i>five
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
