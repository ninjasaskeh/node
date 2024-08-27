import {URL} from 'url'

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs")

console.info(pzn.toString())
console.info(pzn.href)
console.info(pzn.protocol)
console.info(pzn.host)
console.info(pzn.pathname)
console.info(pzn.searchParams)

// ubah

pzn.host = 'www.arief.com'
pzn.searchParams.append("status", "premium")
console.info(`host baru ${pzn.host}`)
console.info(`search param baru ${pzn.searchParams}`)

// https://nodejs.org/docs/v20.17.0/api/url.html

