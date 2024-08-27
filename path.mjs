import path from "path";

// declare file dummy, ga harus ada
const file = "/Users/Desktop/dummy.txt"

// separator  => / , \ , :
console.info(path.sep)
// directory name
console.info(path.dirname(file))
// basename =>  file name
console.info(path.basename(file))
// extension name .txt .js .ts etc
console.info(path.extname(file))
// object whose properties represent significant elements of the path (All)
console.info(path.parse(file))

//  https://nodejs.org/docs/latest/api/path.html
