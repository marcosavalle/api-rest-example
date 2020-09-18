const express = require('express')
const routing = require('./routes/index')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routing(express.Router()))

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log('===================================')
  console.log(`Server running at port ${port}...`)
  console.log('===================================')
})
