import config from './config/config.js'
import app from './server/express.js'
import staffRouter from'./server/routers/dhStaff.router.js' 
import oracledb from 'oracledb'
import express from 'express'
import bodyParser from 'body-parser'

 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use('/api/dhstaff',jsonParser, staffRouter)

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

