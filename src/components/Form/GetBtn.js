import React, { useRef, useEffect } from "react";

function GetBtn({ setGetBtnRef }) {
  const getBtn = useRef(null);

  useEffect(() => {
    setGetBtnRef(getBtn);
  });

  return (
    <button className="btn get-btn" ref={getBtn}>
      Получить
    </button>
  );
}

export default GetBtn;
