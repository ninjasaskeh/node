// buffer => turunan dari tipe data Uint8Array
// buffet juga termasuk global

const buffer = Buffer.from("Arief Maizaki", 'utf8');

const bufferBase64 = Buffer.from("QXJpZWYgTWFpemFraQ==", "base64")

// ini byte2 nya (Uint8Array)
console.info(buffer)

// ini dibalikin lagi jadi string
console.info(buffer.toString())

// bisa juga make encoding yang lain
console.info(`Ini Hex: ${buffer.toString('hex')}`)
console.info(`Ini base64: ${buffer.toString('base64')}`)
console.info(`Ini base64url: ${buffer.toString('base64url')}`)
console.info(`Ini binary: ${buffer.toString('binary')}`)
console.info(`Ini ascii: ${buffer.toString('ascii')}`)
console.info(`Ini latin1: ${buffer.toString('latin1')}`)

// bisa Reverse juga
buffer.reverse()
console.info(`Ini Reverse: ${buffer.toString()}`)

// ganti dari base64 ke utf8
console.info(`From: ${bufferBase64.toString('base64')} To ${bufferBase64.toString('utf8')}`)

// https://nodejs.org/docs/v20.17.0/api/buffer.html

