import fetch from 'node-fetch'
import 'dotenv/config'
import { Router } from 'express'
import mysql from 'mysql'

const router = Router()

// connection configurations
const connection = mysql.createConnection({
  host: 'localhost',
  user: `${process.env.MYSQL_USERNAME}`,
  password: `${process.env.MYSQL_PASSWORD}`,
  database: `${process.env.MYSQL_DATABASE}`,
  multipleStatements: true
})

// connect to database
connection.connect()

// fetch all services
router.get('/?', function (req, res) {
  let sql = "SELECT * from services ";

  connection.query(sql, function (error, dbResults, fields) {
    if (error) throw error;
    let output=[];

    fetch('http://5dae93e7c7e88c0014aa34b7.mockapi.io/services')
      .then(response => response.json())
      .then((mockData) => {
          output=output.concat(mockData)
          output=output.concat(dbResults)
          output=output.concat(Object.values(req.context.models.services))

          return res.send(output)
      })
  })
})

// fetch one specific service
router.get('/:cityId', (req, res) => {
  let output=[];
  const serviceCityId = req.params.cityId

  const sql = `SELECT * from services where servicecityid=` + serviceCityId;
  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    
    // push mock data
    fetch('http://5dae93e7c7e88c0014aa34b7.mockapi.io/services')
      .then(response => response.json())
      .then((json) => { output.push(json) })
   
    // push json and csv
    for (var i = 0; i < req.context.models.services.length; i++) {
      if (req.context.models.services[i].servicecityid == serviceCityId) {
        output.push(req.context.models.services[i])
      }
    }
    output=output.concat(results)
    output=output.concat(Object.values(req.context.models.services))
    return res.send(output)
  })
})

router.post('/flagerror', function (req, res) {
  const payload = req.body

  connection.query(
    "INSERT INTO `errors` ( `serviceid`, `errortext`) VALUES (" +
    payload.serviceid +
    ", '" +
    payload.errortext +
    "');",
    [payload.serviceid, payload.errortext], function (error, results, fields) {
      if (error) throw error
      return res.send({
        error: false,
        data: results,
        message: 'Success'
      })
    }
  )
})

export default router
