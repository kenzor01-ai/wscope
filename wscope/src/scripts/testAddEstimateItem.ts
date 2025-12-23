import { addEstimateItem } from "../lib/estimates/addEstimateItem.ts";

async function run() {
  await addEstimateItem({
    estimateId: 4,
    catalogProductId: 1,
    sqft: 100,
    wasteFactor: 0,
  });

  console.log("Estimate item added successfully");
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

