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
    // console.log('csv services', data)
    services.push(data)
    //  fetch data from mock api
    // fetch('http://5dae93e7c7e88c0014aa34b7.mockapi.io/services')
    //   .then(response => response.json())
    //   // .then((json) => { services.push(json) })
    // console.log('model services', services)
  })
  .on('end', () => {
    // console.log('services', services)
  })


export default services
