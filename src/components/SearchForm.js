import React, { useRef, useEffect } from "react";
import randomMovie from "../utils/randomMovie";

const SearchForm = ({ getMovies, setSearchBtnRef }) => {
  const searchInputRef = useRef();
  const searchBtnRef = useRef();

  useEffect(() => {
    setSearchBtnRef(searchBtnRef);
  }, []);

  useEffect(() => searchInputRef.current.focus());

  return (
    <form className="search-form" onSubmit={getMovies}>
      <input
        className="search-input"
        type="text"
        name="query"
        placeholder={`Например, «${randomMovie()}»`}
        ref={searchInputRef}
      />
      <button className="search-btn" type="submit" ref={searchBtnRef}>
        Найти
      </button>
    </form>
  );
};

export default SearchForm;
