import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { URL, fileURLToPath } from "node:url";
const compress = async () => {
  // Write your code here
  const inputFileURL = new URL("./files/fileToCompress.txt", import.meta.url);
  const input = fileURLToPath(inputFileURL);
  const outputFileURL = new URL("./files/archive.gz", import.meta.url);
  const output = fileURLToPath(outputFileURL);

  const gzip = createGzip();

  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipeline(source, gzip, destination);
};

await compress();
