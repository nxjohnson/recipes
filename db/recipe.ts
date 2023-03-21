import { supabase } from "../lib/supabaseClient";
import {
  Nutrition,
  RecipeCategory,
  RecipeFilters,
  Source,
} from "../types/RecipeTypes";
import { getIngredients } from "./ingredient";

export const createRecipe = async (
  activeTime: number,
  category: RecipeCategory,
  notes: string,
  numberOfServings: number,
  nutrition: Nutrition,
  recipeDirections: string[],
  recipeName: string,
  source: Source,
  totalTime: number
) => {
  const { calories, protein, carbs, fats } = nutrition;
  const { sourceName, sourceUrl } = source;
  const { data, error } = await supabase
    .from("recipes")
    .insert({
      active_time: activeTime,
      calories,
      carbs,
      category,
      fats,
      notes,
      number_of_servings: numberOfServings,
      protein,
      recipe_directions: recipeDirections,
      recipe_name: recipeName,
      source_name: sourceName,
      source_url: sourceUrl,
      total_time: totalTime,
    })
    .select();

  if (error) {
    console.log(error);
    return;
  }

  return data[0].id;
};

export const getOneRecipe = async (recipeId: number) => {
  let ingredients = await getIngredients(recipeId);

  const { data, error } = await supabase
    .from("recipes")
    .select(
      "id, activeTime:active_time, calories, carbs, category:categories(name:category), fats, image:recipe_images(url), notes, numberOfServings:number_of_servings, protein, recipeDirections:recipe_directions, recipeName:recipe_name, sourceName:source_name, sourceUrl:source_url, totalTime:total_time"
    )
    .eq("id", recipeId)
    .single();

  if (error) {
    console.log(error);
    return;
  }

  const {
    id,
    activeTime,
    image,
    notes,
    numberOfServings,
    recipeDirections,
    recipeName,
    totalTime,
    category,
    calories,
    carbs,
    fats,
    protein,
    sourceName,
    sourceUrl,
  } = data;

  const formattedRecipe = {
    id,
    activeTime,
    image: image[0].url,
    ingredients,
    notes,
    numberOfServings,
    recipeDirections,
    recipeName,
    totalTime,
    attributes: { category: category.name },
    nutrition: { calories, carbs, fats, protein },
    source: { sourceName, sourceUrl },
  };

  return formattedRecipe;
};

export async function getRecipes(category: RecipeFilters) {
  let query = supabase
    .from("recipes")
    .select(
      "id, categories!inner(category), image:recipe_images(url), recipeName:recipe_name"
    );

  if (category !== "view all") {
    query = query.eq("categories.category", category);
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    return;
  }

  const formattedRecipes = data.map(({ id, recipeName, categories, image }) => {
    return {
      id,
      recipeName,
      attributes: { category: categories.category },
      image: image[0].url,
    };
  });

  return formattedRecipes;
}
