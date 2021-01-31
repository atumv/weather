import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#0e0e0e",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#040404"
    }
  }
});

function ImageView(props) {
  const classes = useStyles();

  const { largeImageURL: image, tags, user } = props.location.state.image;

  return (
    <div className="image-view-container">
      <div className="image-view">
        <img className="img-preview" src={image} alt={tags} />
        <p className="copyright">&copy; pixabay</p>
        <h4 className="credit">
          Автор: <span>{user}</span>
        </h4>
        <a className="download-link" href={image} target="_blank">
          <Button
            className={classes.root}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Скачать
          </Button>
        </a>
        <Link to="/">
          <button className="back-btn">
            <svg
              className="back-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ImageView;
