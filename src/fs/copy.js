import { cp } from "node:fs/promises";
import { URL } from "node:url";
const copy = async () => {
  // Write your code here
  const src = new URL("./files/", import.meta.url);
  const dest = new URL("./files_copy", import.meta.url);
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
