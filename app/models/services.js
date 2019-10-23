import csvparser from 'csv-parser'
import fs from 'fs'
import fetch from 'node-fetch'

// import data from json file
import jsonservices from '../data/services.json'
const csvFilePath = './app/data/services.csv'

// add imported json file to services
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
