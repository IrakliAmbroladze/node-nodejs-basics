import { cp } from "node:fs/promises";
const copy = async () => {
  // Write your code here
  const src = "./files/";
  const dest = "./files_copy";
  const errorMessage = "FS operation failed";
  try {
    try {
      await cp(src, dest, {
        errorOnExist: true,
        recursive: true,
        force: false,
      });
    } catch (e) {
      throw new Error(errorMessage);
    }
  } catch (e) {
    if (e instanceof Error && e.message === errorMessage) {
      console.log(e.message);
    } else {
      console.log(e);
    }
  }
};

await copy();
