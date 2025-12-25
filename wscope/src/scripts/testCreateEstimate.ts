import "dotenv/config";
import { createEstimateForClient } from "../lib/estimates/createEstimate.ts";

async function main() {
  const estimate = await createEstimateForClient(4); // use a REAL clientId
  console.log("Created estimate:", estimate);
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));

