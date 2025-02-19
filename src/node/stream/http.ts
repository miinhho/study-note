import { createReadStream } from "node:fs";
import { createServer } from "node:http";

const server = createServer((req, res) => {
  const readStream = createReadStream("example.txt");
  res.writeHead(200, { "Content-Type": "text/plain" });

  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
