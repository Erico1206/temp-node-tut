//Modules

const names = require('./4-name') //ngambil semua yang diexport
const {john} = require('./4-name') //bisa juga di destructure gini, ngambil salah satu aja

// console.log(names.john) //karena object, bisa dispesifik gini
// console.log(names)

const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
require('./7-mind-grenade') // bisa karena function dh terexecute di file nya

sayHi('susan')
sayHi(john)
sayHi(names.peter)