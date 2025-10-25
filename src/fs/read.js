import { readFile, access } from "node:fs/promises";
import { URL } from "node:url";

const read = async () => {
  // Write your code here
  const file = new URL("./files/fileToRead.txt", import.meta.url);
  const errorMessage = "FS operation failed";
  try {
    try {
      await access(file);
    } catch (e) {
      throw new Error(errorMessage);
    }
    const contents = await readFile(file, { encoding: "utf8" });
    console.log(contents);
  } catch (e) {
    if (e instanceof Error && e.message === errorMessage) {
      console.log(e.message);
    } else {
      console.log(e);
    }
  }
};

await read();
