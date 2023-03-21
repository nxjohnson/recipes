import { PostgrestError } from "@supabase/supabase-js";
import { MeasuringUnits } from "../components/utilies/measuringUnits";
import { supabase } from "../lib/supabaseClient";
import { Ingredients } from "../types/RecipeTypes";

interface InsertIngredients {
  ingredient_id: number;
  preparation: string | null;
  quantity: number | null;
  recipe_id: number;
  units: MeasuringUnits | null;
}

export async function getIngredients(recipeId: number) {
  const { data, error } = await supabase
    .from("recipe_ingredients")
    .select("quantity, unitsOfMeasure:units, preparation, ingredientName:ingredients(name:ingredient_name)")
    .eq("recipe_id", recipeId)

    if (error) {
      console.log(error)
      return;
    }
    const formattedIngredients = data.map((ingredient) => {
      const name = ingredient.ingredientName.name;
      return {
        ...ingredient,
        ingredientName: name
      }
    })

    return formattedIngredients;
}

export async function createIngredient(ingredientName: string) {
  const { data, error } = await supabase
    .from("ingredients")
    .insert({
      ingredient_name: ingredientName
    })
    .select()

    if (error) {
      console.log(error);
      return;
    }

    return data[0].id;
}

export async function searchIngredients(query:string) {
  const { data, error } = await supabase
    .from("ingredients")
    .select()
    .textSearch('ingredient_name', query, {
      type: 'websearch',
      config: 'english'
    })
    // .limit(5)

    if (error) {
      console.log(error)
      return;
    }

    return data;
}

export async function insertIngredients(ingredients: Ingredients[], recipeId:number) {
  let formattedIngredients: InsertIngredients[] = [];

  for (const ingredient of ingredients) {
    const { ingredientId, preparation, quantity, unitsOfMeasure } = ingredient
    formattedIngredients.push({
      ingredient_id: ingredientId,
      preparation,
      quantity,
      recipe_id: recipeId,
      units: unitsOfMeasure,
    })
  }

  const { data, error } = await supabase
    .from("recipe_ingredients")
    .insert(formattedIngredients);

    if (error) {
      console.log(error)
      return;
    }
    return;
}

export async function getIngredientId(ingredient: string) {
  console.log('getIngredientId', ingredient)
  const { data, error } = await supabase
    .from("ingredients")
    .select()
    .eq("ingredient_name", ingredient);

    if (error) {
      console.log(error);
    }

    return data[0].id;
}