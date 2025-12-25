import { prisma } from "../prisma.ts";

export async function createEstimateForClient(clientId: number) {
  const client = await prisma.client.findUnique({
    where: { id: clientId },
  });

  if (!client) {
    throw new Error("Client not found");
  }

  const estimate = await prisma.estimate.create({
    data: {
      clientId,
      status: "DRAFT",
    },
  });

  return estimate;
}

