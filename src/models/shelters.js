import csvparser from 'csv-parser'
import fs from 'fs'
import fetch from 'node-fetch'

// import data from json file
import jsonShelters from '../data/toronto/shelters.json'

const csvFilePath = './src/data/toronto/shelters.csv'

let shelters = jsonShelters

//  get data from csv from file
fs.createReadStream(csvFilePath)
  .pipe(csvparser())
  .on('data', (data) => shelters.push(data))
  .on('end', () => {
    // console.log('Shelters', shelters)
  })

//  fetch data from mock api
fetch('http://5dae93e7c7e88c0014aa34b7.mockapi.io/shelters')
  .then(response => response.json())
  .then((json) => { shelters.push(json) })

export default shelters
