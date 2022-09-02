const express = require('express')
const axios = require('axios')
const app = express()
const port = 3001
const tempMethods = require('./controllers/tempMethods.js')

app.get('/getTemp', tempMethods.getTemp)

app.get('/getTempHi', tempMethods.getHi)

app.get('/getTempLow', tempMethods.getLow)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})