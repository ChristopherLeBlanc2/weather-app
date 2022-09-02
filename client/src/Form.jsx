import React, { useState } from 'react';


function Form(props) {

  const [currentCity, setCurrentCity] = useState();

  const handleChange = (e) => {
    setCurrentCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.getTemp(currentCity)
    props.getTempHi(currentCity)
    props.getTempLow(currentCity)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type='text' Placeholder='...City' value={currentCity} onChange={handleChange} />
        </label>
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;