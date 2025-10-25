import { writeFile } from "node:fs/promises";
const create = async () => {
  // Write your code here
  try {
    const content = "I am fresh and young";
    await writeFile("./files/fresh.txt", content);
  } catch (e) {
    console.log(e);
  }
};

await create();
