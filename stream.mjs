// stream => turunan EventEmitter
// stream => bisa jadi object yang dibaca || di tulis || keduanya
// stream => cuma contract aja

import fs from 'fs';

// dia concept nya replace jadi main ganti aja
const writer = fs.createWriteStream('target.log');

writer.write("Arief\n")
writer.write("Maizaki\n")
writer.end()

const reader = fs.createReadStream('target.log');
reader.addListener('data', (data) => {
    console.info(data.toString());
})



//https://nodejs.org/docs/v20.17.0/api/stream.html