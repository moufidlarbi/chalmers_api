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
router.get('/', function (req, res) {
  let sql = "SELECT * from services ";

  connection.query(sql, function (error, dbResults, fields) {
    if (error) throw error;
    let output=[];

    // fetch data from mock
    fetch('http://5dae93e7c7e88c0014aa34b7.mockapi.io/services')
      .then(response => response.json())
      .then((mockData) => {
          // concat data from mock, db, json and csv
          output=output.concat(mockData)
          output=output.concat(dbResults)
          output=output.concat(Object.values(req.context.models.services))

          return res.send(output)
      })
  })
})

// fetch all services in one specific city
router.get('/:cityId', (req, res) => {
  let output=[];
  const serviceCityId = req.params.cityId

  let sql = `SELECT * from services `;

  if (serviceCityId) sql += ' WHERE servicecityid=' + serviceCityId;
  
  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    
    // push mock data
    fetch('http://5dae93e7c7e88c0014aa34b7.mockapi.io/services')
      .then(response => response.json())
      .then((mockData) => {
       
        for (var i = 0; i < mockData.length; i++) {
          if (mockData[i].servicecityid == serviceCityId) {
            output.push(mockData[i])
          }
        }
      })
   
    // push json and csv
    for (var i = 0; i < req.context.models.services.length; i++) {
      if (req.context.models.services[i].servicecityid == serviceCityId) {
        output.push(req.context.models.services[i])
      }
    }
    
    output=output.concat(results)

    return res.send(output)
  })
})

// fetch one specific service type (shelters, meals..) in a specific city
router.get('/:cityId/:serviceTypeId', (req, res) => {
  let output=[];
  const serviceCityId = req.params.cityId
  const serviceTypeId = req.params.serviceTypeId

  let sql = `SELECT * from services `;

  if (serviceCityId && !serviceTypeId) {
    sql += ' WHERE servicecityid=' + serviceCityId;
  } else if (serviceCityId && serviceTypeId) {
    sql += ' WHERE servicecityid=' + serviceCityId + ' AND servicetypeid=' + serviceTypeId;
  } else if (!serviceCityId && serviceTypeId) {
    sql += ' WHERE servicetypeid=' + serviceTypeId;
  }
  
  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    
    // push mock data
    fetch('http://5dae93e7c7e88c0014aa34b7.mockapi.io/services')
      .then(response => response.json())
      .then((mockData) => {
       
        for (var i = 0; i < mockData.length; i++) {
          if (serviceCityId && serviceTypeId && mockData[i].servicecityid == serviceCityId && mockData[i].servicetypeid == serviceTypeId) {
            output.push(mockData[i])
          }
        }
      })
   
    // push json and csv
    for (var i = 0; i < req.context.models.services.length; i++) {
      if (serviceCityId && serviceTypeId && req.context.models.services[i].servicecityid == serviceCityId && req.context.models.services[i].servicetypeid == serviceTypeId) {
        output.push(req.context.models.services[i])
      }
    }
    
    output=output.concat(results)

    return res.send(output)
  })
})

router.post('/flagerror', function (req, res) {
  const payload = req.body
  const newError = [
    { 
        "servicename":"Json Shelter 1",
        "serviceaddress":"00 Sherbourne"
     }
]
  
  // store data in db
  connection.query(
    "INSERT INTO `errors` ( `serviceid`, `errortext`) VALUES (" +
    payload.serviceId +
    ", '" +
    payload.errorText +
    "');",
    [payload.serviceId, payload.errorText], function (error, results, fields) {
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
