import { ObjectId } from "mongodb";
import { MeasuringUnits } from "../components/utilies/measuringUnits";

export type RecipeCategory = "Apps" | "Bread" | "Breakfast" | "Mains" | "Sides" | "Sweets" | "";

export type RecipeFilters = "Apps" | "Bread" | "Breakfast" | "Mains" | "Sides" | "Sweets" | "View All";

interface Attributes {
  category: RecipeCategory;
}

export interface Ingredients {
  ingredientName: string;
  quantity: number | null;
  unitsOfMeasure: MeasuringUnits;
}

export interface Source {
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