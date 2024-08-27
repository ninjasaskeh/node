import http from "http";

const server = http.createServer((req, res) => {
    console.info(req.method)
    console.info(req.url)

   if (req.method === "POST"){
       req.addListener("data", (data) => {
           res.setHeader("Content-Type", "application/json")
           res.write(data)
           res.end()
       })
   }else {
       if (req.url === "/arief"){
           res.write('Hello Arief!');
       }else {
           res.write('Hello Http Server!');
       }
    res.end()
   }

})

server.listen(3000)