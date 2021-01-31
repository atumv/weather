import React, { useState } from "react";
import ImageSearch from "./components/ImageSearch";
import ImageList from "./components/ImageList";
import Pagination from "./components/Pagination";
import "./styles/style.css";

const api_key = "16587840-38253a67588d5082167fb10f6";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [totalPages, setTotalPages] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(undefined);
  const [prevQuery, setPrevQuery] = useState(undefined);
  const [searchBtnRef, setSearchBtnRef] = useState(undefined);
  const [error, setError] = useState(undefined);

  const getImages = async e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query) setLoading(true);
    const url = `https://pixabay.com/api/?key=${api_key}&q=${query}&page=${
      query !== prevQuery ? setCurrentPage(1) : currentPage
    }&per_page=30&image_type=photo&pretty=true&orientation=horizontal`;
    const request = await fetch(url);
    const response = await request.json();

    function pageCounter() {
      const pages = parseInt(response.totalHits / 30);
      if (pages > 10) return 10;
      return pages;
    }

    if (!query) {
      setImages([]);
      setTotalPages(undefined);
      setError(undefined);
      setLoading(false);
    } else if (!response.total) {
      setImages([]);
      setTotalPages(undefined);
      setError("Изображения не найдены.");
      setLoading(false);
    } else if (response.total) {
      setImages(response.hits);
      setTotalPages(pageCounter());
      setPrevQuery(query);
      setError(undefined);
      setLoading(false);
    }
  };

  function changePage(e, pageNum) {
    e.preventDefault();
    setCurrentPage(pageNum);
    setImages([]);
    window.scrollTo({ top: 0 });
    setTimeout(() => searchBtnRef.current.click());
  }

  return (
    <div className="app">
      <ImageSearch getImages={getImages} setSearchBtnRef={setSearchBtnRef} />

      {error && <p className="error">{error}</p>}

      <ImageList images={images} totalPages={totalPages} />

      {loading === false && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          changePage={changePage}
        />
      )}
    </div>
  );
}

export default App;
