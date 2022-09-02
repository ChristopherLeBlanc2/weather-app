const axios = require('axios')

const getTemp = (req, res) => {
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.query.currentCity}&appid=2f734c11b2a8878451051283df320d71`).then(response => {
    console.log('req', response.data.list[0].main)
    res.send(response.data.list[0].main.temp.toString())
  }).catch(err => {
    console.log(err)
  })
}

const getHi = (req, res) => {
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.query.currentCity}&appid=2f734c11b2a8878451051283df320d71`).then(response => {
    res.send(response.data.list[0].main.temp_max.toString())
  }).catch(err => {
    console.log(err)
  })
}

const getLow = (req, res) => {
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.query.currentCity}&appid=2f734c11b2a8878451051283df320d71`).then(response => {
    res.send(response.data.list[0].main.temp_min.toString())
  }).catch(err => {
    console.log(err)
  })
}




module.exports.getTemp = getTemp
module.exports.getHi = getHi
module.exports.getLow = getLow