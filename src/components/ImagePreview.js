import React from "react";

const ImagePreview = ({ image }) => (
  <img className="img-preview" src={image.webformatURL} alt={image.tags} />
);

export default ImagePreview;
