// process => instance dari EventEmitter => bisa make listener
// walaupun si process ini bisa diakses secara global tapi disarankan untuk di import aja ↓

import process from 'process'

process.addListener('exit', (exitCode) => {
    console.info('NodeJS process exited with exitCode ', exitCode)
})

console.info(`NodeJS Ver: ${process.version}`)


// argv tu string[]
// [0] dir NodeJS-nya | [1] dir file ini
// argv bisa ditambahin => node process.mjs "Arief Maizaki" => [2]
console.table(process.argv)
console.table(process.report)
// ini env device yaa
console.table(process.env)

process.exit(1);

// ini gabakal jalan karna udah di exit duluan
console.info('SAYA DISEPIR')

// https://nodejs.org/docs/v20.17.0/api/process.html