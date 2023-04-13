import { createContext, ReactElement, useContext, useReducer } from "react";
import { Recipe } from "../types/RecipeTypes";

interface RecipeProviderProps {
  children: ReactElement;
}

type ActionType =
  | "update step1"
  | "add ingredient"
  | "delete ingredient"
  | "add direction"
  | "delete direction"
  | "update step4"
  | "update step5"
  | "update image";

interface Action {
  type: ActionType;
  data: any;
}

const defaultRecipe: Recipe = {
  activeTime: 0,
  attributes: {
    category: "",
  },
  image: null,
  ingredients: [],
  notes: null,
  numberOfServings: 1,
  nutrition: {
    calories: 0,
    protein: null,
    carbs: null,
    fats: null,
  },
  recipeDirections: [],
  recipeName: "",
  source: {
    sourceName: "",
    sourceUrl: null,
  },
  totalTime: 0,
};

export const RecipeContext = createContext<Recipe>(defaultRecipe);
export const RecipeDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);

export function RecipeProvider({ children }: RecipeProviderProps) {
  const [recipe, dispatch] = useReducer(recipeReducer, defaultRecipe);
  return (
    <RecipeContext.Provider value={recipe}>
      <RecipeDispatchContext.Provider value={dispatch}>
        {children}
      </RecipeDispatchContext.Provider>
    </RecipeContext.Provider>
  );
}

function recipeReducer(recipe: Recipe, action: Action) {
  switch (action.type) {
    case "update image": {
      return {
        ...recipe,
        image: action.data,
      };
    }
    case "update step1": {
      const {
        recipeName,
        sourceName,
        sourceUrl,
        category,
        activeTime,
        totalTime,
      } = action.data;
      return {
        ...recipe,
        recipeName,
        activeTime,
        totalTime,
        source: {
          ...recipe.source,
          sourceName,
          sourceUrl,
        },
        attributes: {
          ...recipe.attributes,
          category,
        },
      };
    }
    case "add ingredient": {
      return {
        ...recipe,
        ingredients: [...recipe.ingredients, action.data],
      };
    }
    case "delete ingredient": {
      return {
        ...recipe,
        ingredients: action.data,
      };
    }
    case "add direction": {
      return {
        ...recipe,
        recipeDirections: [...recipe.recipeDirections, action.data],
      };
    }
    case "delete direction": {
      return {
        ...recipe,
        recipeDirections: action.data,
      };
    }
    case "update step4": {
      const { notes } = action.data;
      return {
        ...recipe,
        notes,
      };
    }
    case "update step5": {
      const { numberOfServings, calories, protein, carbs, fats } = action.data;
      return {
        ...recipe,
        numberOfServings,
        nutrition: {
          ...recipe.nutrition,
          calories,
          protein,
          carbs,
          fats,
        },
      };
    }
    default: {
      throw Error(`Unkown action ${action.type}`);
    }
  }
}

export function useRecipe() {
  return useContext(RecipeContext);
}

export function useRecipeDispatch() {
  return useContext(RecipeDispatchContext);
}
