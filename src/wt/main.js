import { cpus } from "node:os";
const performCalculations = async () => {
  // Write your code here
  const numCPUs = cpus().length;
  console.log(numCPUs);
};

await performCalculations();
