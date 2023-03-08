import { ObjectId } from "mongodb";

interface Attributes {
  category: string;
}

export interface Ingredients {
  ingredientName: string;
  quantity: number | null;
  unitsOfMeasure: string;
}

interface Source {
  sourceUrl: string | null;
  sourceName: string;
}

export interface Nutrition {
  calories: number;
  protein: number | null;
  carbs: number | null;
  fats: number | null;
}

export interface Recipe {
  _id?: ObjectId;
  activeTime: number;
  attributes: Attributes;
  created: Date;
  image: string | null;
  ingredients: Ingredients[];
  numberOfServings: number;
  nutrition: Nutrition;
  recipeDirections: string[];
  recipeName: string;
  source: Source;
  totalTime: number;
}