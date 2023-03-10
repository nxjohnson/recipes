import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";
import { Recipe, RecipeFilters } from "../types/RecipeTypes";

interface GetRecipeQuery {
  attributes?: { category: RecipeFilters };
}

export async function createRecipe(recipe: Recipe) {
  const client = await clientPromise;

  const db = client.db("recipesDb");
  const response = await db.collection("recipes").insertOne(recipe);

  return response;
}

export async function getOneRecipe(id: ObjectId) {
  const client = await clientPromise;

  const db = client.db("recipesDb");
  const recipe = await db
    .collection("recipes")
    .findOne({ _id: new ObjectId(id) });

  return recipe;
}

export async function getRecipes(category: RecipeFilters) {
  let query: GetRecipeQuery = {}

  if (category !== 'View All') {
    query.attributes = { category };
  }

  const client = await clientPromise;

  const db = client.db("recipesDb");
  const recipes = await db.collection("recipes").find(query).toArray();

  return recipes;
}

export function updateRecipe() {}

export function deleteRecipe() {}
