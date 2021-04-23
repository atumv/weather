import React, { useRef, useEffect } from "react";

const SearchForm = ({ getImages }) => {
  const searchInput = useRef();

  useEffect(() => searchInput.current.focus());

  return (
    <form className="form" onSubmit={getImages}>
      <input
        className="form-input"
        type="text"
        name="query"
        placeholder="type here"
        ref={searchInput}
      />
    </form>
  );
};

export default SearchForm;
