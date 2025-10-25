import { unlink, access } from "node:fs/promises";
const remove = async () => {
  // Write your code here
  const filePath = "./files/fileToRemove.txt";
  const errorMessage = "FS operation failed";
  try {
    //check if file exists
    try {
      await access(filePath);
    } catch (e) {
      throw new Error(errorMessage);
    }

    //after ensuring in file existence try to delete it
    //and handle if there is any error
    try {
      await unlink(filePath);
      console.log("File deleted successfully");
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    //handle both of custom thrown error and uknown one
    if (e instanceof Error && e.message === errorMessage) {
      console.log(e.message);
    } else {
      console.log(e);
    }
  }
};

await remove();
