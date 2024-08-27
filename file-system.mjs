import fs from 'fs/promises';

// buat nge baca 1 file
const buffer = await fs.readFile("file-system.mjs");

console.info(buffer.toString())

// bikin file baru trus masukin isi nya
await fs.writeFile("temp.txt", "Hello Nodejs")

//  https://nodejs.org/docs/latest/api/fs.html