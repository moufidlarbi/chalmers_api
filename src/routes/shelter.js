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

router.get('/?', function (req, res) {
  let sql = `SELECT * from shelters `;
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    const finalResults = results.concat(Object.values(req.context.models.shelters));
    return res.send(finalResults)
  })
})

router.get('/:cityId', (req, res) => {
  const sql = `SELECT * from shelters where sheltercityid=` + req.params.cityId;

  connection.query(sql, function(error, results, fields) {
    if (error) throw error;
    fetch('http://5dae93e7c7e88c0014aa34b7.mockapi.io/shelters')
      .then(response => response.json())
      .then((json) => { results.push(json) })
    for (var i = 0; i < req.context.models.shelters.length; i++) {
      if (req.context.models.shelters[i].sheltercityid == req.params.cityId) {
        results.push(req.context.models.shelters[i])
      }
    }
    return res.send(results)
  })
})

router.post('/flagerror', function (req, res) {
  const payload = req.body

  connection.query(
    "INSERT INTO `errors` ( `shelterid`, `errortext`) VALUES (" +
    payload.shelterid +
    ", '" +
    payload.errortext +
    "');",
    [payload.shelterid, payload.errortext], function (error, results, fields) {
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
