import fs from 'fs';
import zlib from 'zlib';

const source = fs.readFileSync('zlib-compress.mjs.txt')
console.info(source.toString())

const result = zlib.unzipSync(source);
console.info(result.toString())

// kalo mau bikin filenya lagi
// fs.writeFileSync("zlib-compress.mjs.txt", result)
