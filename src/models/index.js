import services from './services'
// import meals from '../data/toronto/meals.json'

import csvparser from 'csv-parser'
import fs from 'fs'


// fs.createReadStream('./src/data/toronto/dropins.csv')
//   .pipe(csvparser())
//   .on('data', (data) => dropins.push(data))
//   .on('end', () => {
//     console.log('dropins', dropins)
//   })

// fs.createReadStream('./src/data/toronto/clothing.csv')
//   .pipe(csvparser())
//   .on('data', (data) => clothing.push(data))
//   .on('end', () => {
//     // console.log('clothing', clothing)
//   })

export default {
  services
}
