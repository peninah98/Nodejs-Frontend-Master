import http from "node:http"

const server = http.createServer((req, res) => {
  res.statusCode(200)
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello there")
})

server.listen(4000, () => console.log("Listening on port 4000"))
