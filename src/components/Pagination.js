import React from "react";

const Pagination = ({ totalPage, nextPage }) => {
  const page = [];

  for (let i = 1; i <= totalPage; i++) {
    page.push(
      <li onClick={() => nextPage(i)} key={i}>
        {/*eslint-disable-next-line*/}
        <a href="#">{i}</a>{" "}
      </li>
    );
  }
  console.log("adsas", page);
  return (
    <div className="row">
      <div className="col s12">
        <ul class="pagination">{page}</ul>
      </div>
    </div>
  );
};

export default Pagination;
