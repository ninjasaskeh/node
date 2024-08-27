import os from "os";

// liat platform os
console.info(os.platform())
// architecture
console.info(os.arch())
// free memory
console.info(os.freemem())
// total memory
console.info(os.totalmem())
// home directory
console.info(os.homedir())
// hostname
console.info(os.hostname())
// uptime(waktu nyala)
console.info(os.uptime())
// cpu
console.table(os.cpus())
// networkInterfaces
console.table(os.networkInterfaces())

// https://nodejs.org/docs/latest/api/os.html