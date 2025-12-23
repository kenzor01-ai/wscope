import { prisma } from "../prisma.ts";

type AddEstimateItemInput = {
  estimateId: number;
  catalogProductId: number;
  sqft: number;
  wasteFactor?: number;
};

export async function addEstimateItem({
  estimateId,
  catalogProductId,
  sqft,
  wasteFactor = 0,
}: AddEstimateItemInput) {
  // function body
}


