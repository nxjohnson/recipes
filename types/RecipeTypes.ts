interface Attributes {
  category: string,
  course: string,
  cuisine: string,
}

export interface Ingredients {
  ingredientName: string,
  quantity: number | null,
  unitsOfMeasure: string,

}

interface Source {
  sourceUrl: string,
  sourceName: string | null,
}

export interface Recipe {
  activeTime: number,
  attributes: Attributes,
  id: string,
  image: string,
  ingredients: Ingredients[],
  numberOfServings: number,
  recipeDirections: string[],
  recipeName: string,
  source: Source
  totalTime: number,
}