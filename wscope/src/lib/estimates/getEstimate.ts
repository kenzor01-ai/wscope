import { prisma } from "../prisma.ts";

export async function getEstimateById(estimateId: number) {
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    include: {
      client: true,
      items: true,
    },
  });

  if (!estimate) {
    throw new Error("Estimate not found");
  }

  return estimate;
}

