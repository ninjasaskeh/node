import timers from "timers/promises";

// console.info(new Date())
// const name = await timers.setTimeout(5000, 'Arief')
// console.info(new  Date())
// console.info(name)

for await (const startTime of timers.setInterval(1000, '_')){
    console.info(`start time: ${new Date()}`);
}

// https://nodejs.org/docs/v20.17.0/api/timers.html#timers-promises-api