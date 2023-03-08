import clientPromise from "../lib/mongodb";
import { Recipe } from "../types/RecipeTypes";

export async function createRecipe(recipe: Recipe) {
  const client = await clientPromise;
  const db = client.db("recipesDb");
  const response = await db.collection("recipes").insertOne(recipe);

  return response;
}

export function getOneRecipe() {

}

export function getRecipes() {

}

export function updateRecipe() {

}

export function deleteRecipe() {

}