import readline from 'readline';
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// minus-nya ini harus make callback jadi kurang efektif
input.question("Siapa nama anda ? ", (nama) => {
    console.info(`Hai ${nama}`);
    input.close();
})


// https://nodejs.org/docs/v20.17.0/api/readline.html