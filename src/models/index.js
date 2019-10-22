import shelters from './shelters'
import meals from '../data/toronto/meals.json'

import csvparser from 'csv-parser'
import fs from 'fs'

const dropins = []
const clothing = []

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
  shelters,
  meals,
  dropins,
  clothing
}
