import { prisma } from "../prisma";

export async function getJobWithRelations(jobId: number) {
  const job = await prisma.job.findUnique({
    where: { id: jobId },
    include: {
      client: true,
      product: {
        include: {
          manufacturer: true,
        },
      },
    },
  });

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
}

