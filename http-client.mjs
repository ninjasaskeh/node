import https from "https";

const endpoint = "https://eocrgvbtzjkx7jc.m.pipedream.net"
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Received ${data.toString()}`);
    })
})

const body = JSON.stringify({
    firstName: 'Arief',
    lastName: 'Maizaki',
})

request.write(body)
request.end()

//  https://nodejs.org/docs/v20.17.0/api/http.html