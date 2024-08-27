import {threadId, Worker} from 'worker_threads'

const worker1 = new Worker('./worker.mjs')
const worker2  = new Worker('./worker.mjs')

worker1.addListener('message', (message) => {
    console.info(`Thread-${threadId} Received message from worker1 ${message}`)
})
worker2.addListener('message', (message) => {
    console.info(`Thread-${threadId} Received message from worker2 ${message}`)
})

worker1.postMessage(10)
worker2.postMessage(10)

// https://nodejs.org/docs/v20.17.0/api/worker_threads.html