import {Console} from 'console';
import fs from 'fs';

const file = fs.createWriteStream('application.log')

const log = new Console({
    stdout: file,
    stderr: file
})

log.info('Hello World');
log.error('Error');

const person = {
    firstName: 'John',
    lastName: 'Doe',
}

log.table(person)

// simple nyaa ini buat bikin log sendiri jadi ga harus di terminal
// https://nodejs.org/docs/v20.17.0/api/console.html