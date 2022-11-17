interface Attributes {
  category: string;
  course: string;
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

export interface Recipe {
  activeTime: number;
  attributes: Attributes;
  id: string;
  image: string;
  ingredients: Ingredients[];
  numberOfServings: number;
  recipeDirections: string[];
  recipeName: string;
  source: Source;
  totalTime: number;
}

export const example: Recipe[] = [
  {
    activeTime: 20,
    attributes: {
      category: "Bread",
      course: "Dinner",
    },
    id: "test",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2508&q=80",
    ingredients: [
      {
        ingredientName: "Sourdough Bread",
        quantity: 2,
        unitsOfMeasure: "Slices",
      },
      {
        ingredientName: "Cheddar Cheese",
        quantity: null,
        unitsOfMeasure: "",
      },
    ],
    numberOfServings: 1,
    recipeDirections: [
      "Add butter to bread",
      "Add cheese to bread",
      "Cook in skillet for 4mins each side",
    ],
    recipeName: "Grilled Cheese",
    source: {
      sourceUrl: "",
      sourceName: "Neil Johnson",
    },
    totalTime: 20,
  },
  {
    activeTime: 20,
    attributes: {
      category: "Bread",
      course: "Dinner",
    },
    id: "test",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2508&q=80",
    ingredients: [
      {
        ingredientName: "Sourdough Bread",
        quantity: 2,
        unitsOfMeasure: "Slices",
      },
      {
        ingredientName: "Cheddar Cheese",
        quantity: null,
        unitsOfMeasure: "",
      },
    ],
    numberOfServings: 1,
    recipeDirections: [
      "Add butter to bread",
      "Add cheese to bread",
      "Cook in skillet for 4mins each side",
    ],
    recipeName: "Chicken Katsu",
    source: {
      sourceUrl: "",
      sourceName: "Neil Johnson",
    },
    totalTime: 20,
  },
  {
    activeTime: 20,
    attributes: {
      category: "Bread",
      course: "Dinner",
    },
    id: "test",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2508&q=80",
    ingredients: [
      {
        ingredientName: "Sourdough Bread",
        quantity: 2,
        unitsOfMeasure: "Slices",
      },
      {
        ingredientName: "Cheddar Cheese",
        quantity: null,
        unitsOfMeasure: "",
      },
    ],
    numberOfServings: 1,
    recipeDirections: [
      "Add butter to bread",
      "Add cheese to bread",
      "Cook in skillet for 4mins each side",
    ],
    recipeName: "Grilled Chicken with Basil Dressing",
    source: {
      sourceUrl: "",
      sourceName: "Neil Johnson",
    },
    totalTime: 20,
  },
  {
    activeTime: 20,
    attributes: {
      category: "Bread",
      course: "Dinner",
    },
    id: "test",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2508&q=80",
    ingredients: [
      {
        ingredientName: "Sourdough Bread",
        quantity: 2,
        unitsOfMeasure: "Slices",
      },
      {
        ingredientName: "Cheddar Cheese",
        quantity: null,
        unitsOfMeasure: "",
      },
    ],
    numberOfServings: 1,
    recipeDirections: [
      "Add butter to bread",
      "Add cheese to bread",
      "Cook in skillet for 4mins each side",
    ],
    recipeName: "Green Beans with Lemon and Garlic",
    source: {
      sourceUrl: "",
      sourceName: "Neil Johnson",
    },
    totalTime: 20,
  },
  {
    activeTime: 20,
    attributes: {
      category: "Bread",
      course: "Dinner",
    },
    id: "test",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2508&q=80",
    ingredients: [
      {
        ingredientName: "Sourdough Bread",
        quantity: 2,
        unitsOfMeasure: "Slices",
      },
      {
        ingredientName: "Cheddar Cheese",
        quantity: null,
        unitsOfMeasure: "",
      },
    ],
    numberOfServings: 1,
    recipeDirections: [
      "Add butter to bread",
      "Add cheese to bread",
      "Cook in skillet for 4mins each side",
    ],
    recipeName: "Grilled Cheese",
    source: {
      sourceUrl: "",
      sourceName: "Neil Johnson",
    },
    totalTime: 20,
  },
  {
    activeTime: 20,
    attributes: {
      category: "Bread",
      course: "Dinner",
    },
    id: "test",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2508&q=80",
    ingredients: [
      {
        ingredientName: "Sourdough Bread",
        quantity: 2,
        unitsOfMeasure: "Slices",
      },
      {
        ingredientName: "Cheddar Cheese",
        quantity: null,
        unitsOfMeasure: "",
      },
    ],
    numberOfServings: 1,
    recipeDirections: [
      "Add butter to bread",
      "Add cheese to bread",
      "Cook in skillet for 4mins each side",
    ],
    recipeName: "Grilled Cheese",
    source: {
      sourceUrl: "",
      sourceName: "Neil Johnson",
    },
    totalTime: 20,
  },
  {
    activeTime: 20,
    attributes: {
      category: "Bread",
      course: "Dinner",
    },
    id: "test",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2508&q=80",
    ingredients: [
      {
        ingredientName: "Sourdough Bread",
        quantity: 2,
        unitsOfMeasure: "Slices",
      },
      {
        ingredientName: "Cheddar Cheese",
        quantity: null,
        unitsOfMeasure: "",
      },
    ],
    numberOfServings: 1,
    recipeDirections: [
      "Add butter to bread",
      "Add cheese to bread",
      "Cook in skillet for 4mins each side",
    ],
    recipeName: "Grilled Cheese",
    source: {
      sourceUrl: "",
      sourceName: "Neil Johnson",
    },
    totalTime: 20,
  },
  {
    activeTime: 20,
    attributes: {
      category: "Bread",
      course: "Dinner",
    },
    id: "test",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2508&q=80",
    ingredients: [
      {
        ingredientName: "Sourdough Bread",
        quantity: 2,
        unitsOfMeasure: "Slices",
      },
      {
        ingredientName: "Cheddar Cheese",
        quantity: null,
        unitsOfMeasure: "",
      },
    ],
    numberOfServings: 1,
    recipeDirections: [
      "Add butter to bread",
      "Add cheese to bread",
      "Cook in skillet for 4mins each side",
    ],
    recipeName: "Grilled Cheese",
    source: {
      sourceUrl: "",
      sourceName: "Neil Johnson",
    },
    totalTime: 20,
  },
];
