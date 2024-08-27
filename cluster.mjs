// ==> Primary & Worker
// Primary => koordinator / manager
// Worker => aplikasi yang menjalankan tugas
import cluster from 'cluster';
import os from "os";
import process from "process";
import http from "http";


if (cluster.isPrimary){
    // jalankan worker
    console.info(`Primary is running : ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit", (worker) => {
        console.info(`Worker-${worker.id} is exit`)
        // dijalanin lagi biar aplikasi ga mati
        cluster.fork()
    })
}

if (cluster.isWorker){
    console.info(`Worker is running : ${process.pid}`);

    const server = http.createServer((req, res) => {
        res.write(`Response from process ${process.pid}`);
        res.end();
        process.exit()
    })

    server.listen(3000)

}

// https://nodejs.org/docs/v20.17.0/api/cluster.html

