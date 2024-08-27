// Net Server & Client => object Stream
import net from 'net';

const server = net.createServer((client) => {
    console.info('Client started');

    client.addListener('data', (data) => {
        console.info(`Received data ${data.toString()}`);
        client.write(`hello ${data}\r\n`)
    })
})

server.listen(3000, 'localhost')

// https://nodejs.org/docs/v20.17.0/api/net.html