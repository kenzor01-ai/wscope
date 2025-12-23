"use server";

import { addEstimateItem } from "@/lib/estimates/addEstimateItem";

type AddEstimateItemActionInput = {
  estimateId: number;
  catalogProductId: number;
  sqft: number;
  wasteFactor?: number;
};

export async function addEstimateItemAction(
  input: AddEstimateItemActionInput
) {
  await addEstimateItem(input);
}
"use server";

import { addEstimateItem } from "@/lib/estimates/addEstimateItem";

type AddEstimateItemActionInput = {
  estimateId: number;
  catalogProductId: number;
  sqft: number;
  wasteFactor?: number;
};

export async function addEstimateItemAction(
  input: AddEstimateItemActionInput

) {

  await addEstimateItem(input);
}
