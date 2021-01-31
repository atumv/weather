import React from "react";

function Pagination(props) {
  const pageLinks = [];

  for (let i = 1; i <= props.totalPages; i++) {
    pageLinks.push(
      <li className="pagination-item" key={i}>
        <a
          className={
            props.currentPage == i
              ? "pagination-link pagination-link-active"
              : "pagination-link pagination-link-passive"
          }
          href="#"
          onClick={
            props.currentPage == i
              ? e => e.preventDefault()
              : e => props.changePage(e, i)
          }
        >
          {i}
        </a>
      </li>
    );
  }

  return <ul className="pagination">{pageLinks}</ul>;
}

export default Pagination;
