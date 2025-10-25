import { rename as renamePromise, access } from "node:fs/promises";
import { URL } from "node:url";

const rename = async () => {
  // Write your code here
  const oldPath = new URL("./files/wrongFilename.txt", import.meta.url);
  const newPath = new URL("./files/properFilename.md", import.meta.url);
  const errorMessage = "FS operation failed";
  try {
    try {
      await access(oldPath);
    } catch (e) {
      throw new Error(errorMessage);
    }
    await access(newPath);
    throw new Error(errorMessage);
  } catch (e) {
    if (e instanceof Error && e.message === errorMessage) {
      console.log(e.message);
    } else {
      try {
        await renamePromise(oldPath, newPath);
      } catch (e) {
        console.log(e);
      }
    }
  }
};

await rename();
