import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row cen">
          <div class=" l6 m4 s12 cen">
            <h5 class="white-text center">
              <img
                src={require("../tmdb.svg")}
                style={{ height: "2rem", width: "8rem" }}
              />
            </h5>
            <p class="grey-text text-lighten-4">
              This product uses the TMDb API but is not endorsed or certified by
              TMDb.
            </p>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2020 copyright Adithya
          <a class="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
