import type { NextApiRequest, NextApiResponse } from "next";
import { createIngredient, getIngredientId } from "../../../db/ingredient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method !== "GET") {
    res.status(404);
  }

  const { ingredient } = query;

  if (ingredient && !Array.isArray(ingredient)) {
    try {
      const data = await getIngredientId(ingredient);
      res.status(201).send(data);
    } catch {
      const data = await createIngredient(ingredient);
      res.status(201).send(data);
    }
  }
  res.status(404);
}
