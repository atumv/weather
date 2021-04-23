import React from "react";

const UserInfo = ({ image }) => (
  <div>
    {image.userImageURL && (
      <img className="user-image" src={image.userImageURL} alt="user-image" />
    )}
    <h4 className="credit">
      by&nbsp;
      <a
        className="profile-link"
        href={`http://pixabay.com/users/${image.user}-${image.user_id}`}
      >
        {image.user}
      </a>
    </h4>
  </div>
);

export default UserInfo;
