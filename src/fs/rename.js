import { rename as renamePromise, access } from "node:fs/promises";
const rename = async () => {
  // Write your code here
  const oldPath = "./files/wrongFilename.txt";
  const newPath = "./files/properFilename.md";
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
