import { unlink, access } from "node:fs/promises";
const remove = async () => {
  // Write your code here
  const filePath = "./files/fileToRemove.txt";
  try {
    try {
      await access(filePath);
    } catch (e) {
      throw new Error(errorMessage);
    }
    await unlink(filePath);
    console.log("File deleted successfully");
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
    if (err.code === "ENOENT") {
      console.log("File does not exist");
    } else {
      console.error("Error deleting file:", err);
    }
  }
};

await remove();
