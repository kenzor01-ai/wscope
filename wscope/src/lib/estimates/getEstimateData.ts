import { getJobWithRelations } from "./getEstimateWithItems";

export async function getEstimateData(jobId: number) {
  const job = await getJobWithRelations(jobId);

  return {
    job,
  };
}

