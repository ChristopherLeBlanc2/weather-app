import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form.jsx'
import axios from 'axios';

function App() {

  useEffect(() => {
    getTemp('new york city, ny, us')
  }, [])

  const [temp, setTemp] = useState();

  const getTemp = (currentCity) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=2f734c11b2a8878451051283df320d71`).then(response => {
      setTemp(response.data.list[0].main.temp)
    })
  }

  return (
    <div className="App">
      <h1>Your Forecast</h1>
      <Form getTemp={getTemp}/>
      <h2>Temp(K): {temp}</h2>
    </div>
  );
}

export default App;
