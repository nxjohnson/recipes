import type { NextApiRequest, NextApiResponse } from "next";
import { getCategoryId } from "../../../db/category";
import { insertIngredients } from "../../../db/ingredient";
import { createRecipe } from "../../../db/recipe";
import { insertImage } from "../../../db/recipeImage";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { body, method } = req;

//   if (method !== "POST") {
//     return res.status(404);
//   }
//   try {
//     const response = await createRecipe(JSON.parse(body));

//     res.status(201).send(response.insertedId);
//   } catch (error) {
//     console.log(error);
//     res.status(404);
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;

  if (method !== "POST") {
    return res.status(404);
  }

  const { activeTime, attributes, image, ingredients, numberOfServings, notes, nutrition, recipeDirections, recipeName, source, totalTime } = JSON.parse(body)

  try {
    const categoryId = await getCategoryId(attributes.category);

    const recipeId = await createRecipe(activeTime, categoryId, 'test', numberOfServings, nutrition, recipeDirections, recipeName, source, totalTime)

    insertImage(recipeId, image);
    insertIngredients(ingredients, recipeId);


    // res.status(201).send('test');
  } catch (error) {
    console.log(error);
    res.status(404);
  }
}
