import React from "react";
import { Link } from "react-router-dom";

function ImageList({ images, totalPages }) {
  return (
    <div
      className="image-list"
      style={totalPages > 1 ? { minHeight: "1000px" } : {}}
    >
      {images.map(image => {
        return (
          <div key={image.id}>
            <Link
              to={{
                pathname: `/image/${image.id}`,
                state: { image }
              }}
            >
              <img
                className="img-thumb"
                src={image.largeImageURL}
                alt="{image.tags}"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ImageList;
