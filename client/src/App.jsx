import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form.jsx'
import axios from 'axios';

function App() {

  useEffect(() => {
    getTemp('new york city, ny, us')
  }, [])

  useEffect(() => {
    getTempHi('new york city, ny, us')
  }, [])

  useEffect(() => {
    getTempLow('new york city, ny, us')
  }, [])

  const [temp, setTemp] = useState();
  const [tempHi, setTempHi] = useState();
  const [tempLow, setTempLow] = useState();

  const getTemp = (currentCity) => {
    axios.get('/getTemp', {
      params: {
        currentCity: currentCity
      }
    }).then(response => {
      console.log(response)
      setTemp(response.data)
    })
  }

  const getTempLow = (currentCity) => {
    axios.get('/getTempLow', {
      params: {
        currentCity: currentCity
      }
    }).then(response => {
      console.log(response)
      setTempLow(response.data)
    })
  }

  const getTempHi = (currentCity) => {
    axios.get('/getTempHi', {
      params: {
        currentCity: currentCity
      }
    }).then(response => {
      console.log(response)
      setTempHi(response.data)
    })
  }

  return (
    <div className="App">
      <h1>Your Forecast</h1>
      <Form getTemp={getTemp} getTempLow={getTempLow} getTempHi={getTempHi}/>
      <span>
      <p>Temp Low(K): {tempLow}</p>
      <p>Temp(K): {temp}</p>
      <p>Temp Hi(K): {tempHi}</p>
      </span>
    </div>
  );
}

export default App;
