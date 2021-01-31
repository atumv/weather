import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      fontFamily:
        '"Montserrat", "Open Sans", "Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"',
      borderRadius: "50px",
      paddingLeft: "1rem",
      color: "#999999"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.16)"
      },
      "&:hover fieldset": {
        border: "1px solid rgba(255, 255, 255, 0.16)"
      },
      "&.Mui-focused fieldset": {
        border: "1px solid rgba(255, 255, 255, 0.13)"
      }
    },
    "& .MuiIconButton-root": {
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.05)"
      }
    },
    "& .MuiSvgIcon-root": {
      fill: "#caa337"
    }
  }
});

function ImageSearch({ getImages, setSearchBtnRef }) {
  const classes = useStyles();

  const searchInput = useRef();
  const searchBtn = useRef();

  useEffect(() => {
    setSearchBtnRef(searchBtn);
    searchInput.current.focus();
  });

  return (
    <form className="form" onSubmit={getImages}>
      <TextField
        classes={{
          root: classes.root
        }}
        variant="outlined"
        color="primary"
        name="query"
        inputRef={searchInput}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton className="search-btn" type="submit" ref={searchBtn}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  );
}

export default ImageSearch;
