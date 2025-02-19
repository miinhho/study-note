import { createWriteStream } from "node:fs";

const writeStream = createWriteStream("example.txt");

writeStream.write("Hello, World!");

writeStream.end(() => {
  console.log("Finished writing to file.");
});
