import React from 'react'
import Input from './Input'
import GetBtn from './GetBtn'
import LoadingBtn from './LoadingBtn'
import CityExamples from './CityExamples'

function Form ({ loading, getWeather }) {
  return (
    <form className="form" onSubmit={getWeather}>
      <Input />
      {loading ? <LoadingBtn /> : <GetBtn />}
      <CityExamples />
    </form>
  )
}

export default Form;