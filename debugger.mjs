const sayHello = (name) => {
    // breakpoint
    debugger;
    return `Hello ${name}`;
}

const name = 'eko'
 debugger;
console.info(sayHello(name));

// node inspect .....mjs => debug mode
// https://nodejs.org/docs/v20.17.0/api/debugger.html#debugger