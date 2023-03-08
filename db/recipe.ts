import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";
import { Recipe } from "../types/RecipeTypes";

export async function createRecipe(recipe: Recipe) {
  const client = await clientPromise;

  const db = client.db("recipesDb");
  const response = await db.collection("recipes").insertOne(recipe);

  return response;
}

export async function getOneRecipe(id: string) {
  const client = await clientPromise;

  const db = client.db("recipesDb");
  const recipe = await db
    .collection("recipes")
    .findOne({ _id: new ObjectId(id) });

  return recipe;
}

export async function getRecipes() {
  const client = await clientPromise;

  const db = client.db("recipesDb");
  const recipes = await db.collection("recipes").find({}).toArray();

  return recipes;
}

export function updateRecipe() {}

export function deleteRecipe() {}
