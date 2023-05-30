import http from "http";

http
  .createServer((req, res) => {
    console.log("The server is running on http://localhost:4000/");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World");
    res.end();
  })
  .listen(4000);
