import { RecipeCategory } from "./RecipeTypes";

export interface AddRecipeStep1 {
  recipeName: string;
  sourceName: string;
  sourceUrl: string | null;
  category: RecipeCategory;
  activeTime: number;
  totalTime: number;
}

export interface AddRecipeStep4 {
  notes: string | null;
}

export interface AddRecipeStep5 {
  numberOfServings: number;
  calories: number;
  protein: number | null;
  carbs: number | null;
  fats: number | null;
}