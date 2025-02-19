import { createReadStream, createWriteStream } from "node:fs";

const writeStream = createWriteStream("input.txt");
const readStream = createReadStream("example.txt");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("File copied successfully");
});

setTimeout(() => {
	console.log("Unpiping stream...");
	readStream.unpipe(writeStream);
	readStream.destroy();
}, 5000);
