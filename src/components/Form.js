import React, { useState } from "react";
import Input from "./Input";
import GetBtn from "./GetBtn";
import LoadingBtn from "./LoadingBtn";
import CityExamples from "./CityExamples";

const Form = ({ loading, getWeather }) => {
  const [inputRef, setInputRef] = useState(undefined);
  const [getBtnRef, setGetBtnRef] = useState(undefined);

  return (
    <form className="form" onSubmit={getWeather}>
      <Input setInputRef={setInputRef} />
      {loading ? <LoadingBtn /> : <GetBtn setGetBtnRef={setGetBtnRef} />}
      <CityExamples inputRef={inputRef} getBtnRef={getBtnRef} />
    </form>
  );
};

export default Form;
