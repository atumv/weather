import React from "react";
import InfiniteScrolling from "./InfiniteScrolling";
import { Link } from "react-router-dom";

const ImageList = ({ images, loadMore }) => (
  <InfiniteScrolling loadMore={loadMore}>
    <div className="image-list">
      {images.map(image => (
        <div className="image-container" key={image.id}>
          <Link
            to={{
              pathname: `/image/${image.id}`,
              state: { image }
            }}
          >
            <img
              className="img-thumb"
              src={image.previewURL}
              alt={image.tags}
            />
          </Link>
        </div>
      ))}
    </div>
  </InfiniteScrolling>
);

export default ImageList;
