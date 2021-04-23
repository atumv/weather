import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import ImageList from "./components/ImageList";
import Error from "./components/Error";
import { api_key, base_url } from "./variables/variables";
import getData from "./utils/getData";
import "./styles/style.css";

const App = () => {
  const [apiKey] = useState(api_key);
  const [baseUrl] = useState(base_url);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(undefined);
  const [query, setQuery] = useState(undefined);
  const [error, setError] = useState(undefined);

  const getImages = async e => {
    e.preventDefault();

    setPage(1);
    
    const inputValue = e.target.elements.query.value;
    const query = inputValue.trim();

    const url = `${baseUrl}&key=${apiKey}&q=${query}&page=1`;
    const data = await getData(url);
    const { total: results, hits: images } = data;

    if (!query) {
      setImages([]);
      setError(undefined);
    } else if (!results) {
      setImages([]);
      setError("No images were found.");
    } else if (results) {
      setQuery(query);
      setImages(images);
      setError(undefined);
    }
  };

  const loadMore = async () => {
    const url = `${baseUrl}&key=${apiKey}&q=${query}&page=${page + 1}`;
    const data = await getData(url);
    const newImages = data.hits;
    setImages([...images, ...newImages]);
    setPage(page + 1);
  };

  return (
    <div>
      <SearchForm getImages={getImages} />
      <ImageList images={images} loadMore={loadMore} />
      <Error error={error} />
    </div>
  );
};

export default App;
