import React, { useRef, useEffect } from "react";

const GetBtn = ({ setGetBtnRef }) => {
  const getBtn = useRef();

  useEffect(() => {
    setGetBtnRef(getBtn);
  }, []);
  
  return (
    <button className="btn get-btn" ref={getBtn}>
      Получить
    </button>
  );
};

export default GetBtn;
