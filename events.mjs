import { EventEmitter } from 'events';

const emitter = new EventEmitter();

//                               ↓
emitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
})

emitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
})

// result bisa 2x karna  ↓  nya sama
emitter.emit('hello', 'arip')

// https://nodejs.org/docs/v20.17.0/api/events.html