import { writeFile, access } from "node:fs/promises";
import { URL } from "node:url";

const create = async () => {
  // Write your code here
  const content = "I am fresh and young";
  const file = new URL("./files/fresh.txt", import.meta.url);
  const errorMessage = "FS operation failed";
  try {
    await access(file);
    throw new Error(errorMessage);
  } catch (e) {
    if (e instanceof Error && e.message === errorMessage) {
      console.log(e.message);
    } else {
      try {
        await writeFile(file, content);
      } catch (e) {
        console.log(e);
      }
    }
  }
};

await create();
