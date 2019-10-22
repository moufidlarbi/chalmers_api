import csvparser from 'csv-parser'
import fs from 'fs'
import fetch from 'node-fetch'

// import data from json file
import jsonservices from '../data/services.json'
const csvFilePath = './src/data/services.csv'

let services = jsonservices

//  read data from csv file
fs.createReadStream(csvFilePath)
  .pipe(csvparser())
  .on('data', (data) => {
    services.push(data)
  })
  .on('end', () => {
    // console.log('services', services)
  })


export default services
