import React from "react";
import { Link } from "react-router-dom";
import ImagePreview from "./ImagePreview";
import UserInfo from "./UserInfo";
import DownloadButton from "./DownloadButton";
import BackButton from "./BackButton";

const ImageView = props => {
  const image = props.location.state.image;

  return (
    <div className="image-view-container">
      <div className="image-view">
        <ImagePreview image={image} />
        <UserInfo image={image} />
        <DownloadButton image={image} />
        <Link to="/">
          <BackButton />
        </Link>
      </div>
    </div>
  );
};

export default ImageView;
