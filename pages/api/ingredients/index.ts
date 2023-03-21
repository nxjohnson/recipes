import type { NextApiRequest, NextApiResponse } from "next";
import { createIngredient, searchIngredients } from "../../../db/ingredient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, query } = req;

  if (method === 'GET') {
    if(query.query && !Array.isArray(query.query)) {
      const data = await searchIngredients(query.query);
      res.status(201).send(data);
    }
  }

  if (method === 'POST') {
    const data = await createIngredient(body);
    res.status(201).send(data);
  }

  res.status(404)
}