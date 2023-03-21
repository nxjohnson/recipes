interface Unit {
  abbreviation: string;
  plural: string;
  pluralAbbreviation: string;
}

export interface MeasuringUnits {
  teaspoon: Unit;
  tablespoon: Unit;
  cup: Unit;
  pint: Unit;
  quart: Unit;
  gallon: Unit;
  ["fluid ounce"]: Unit;
  gram: Unit;
  kilogram: Unit;
  ounce: Unit;
  pound: Unit;
}

export type MeasuringUnitsKey = "teaspoon" | "tablespoon" | "cup" | "pint" | "quart" | "gallon" | "fluid ounce" | "gram" | "kilogram" | "ounce" | "pound"

const measuringUnits: MeasuringUnits = {
  teaspoon: {
    abbreviation: "tsp",
    plural: "teaspoons",
    pluralAbbreviation: "tsps",
  },
  tablespoon: {
    abbreviation: "tbs",
    plural: "tablespoons",
    pluralAbbreviation: "tbsps",
  },
  cup: {
    abbreviation: "c",
    plural: "cups",
    pluralAbbreviation: "cups",
  },
  pint: {
    abbreviation: "pt",
    plural: "pints",
    pluralAbbreviation: "pts",
  },
  quart: {
    abbreviation: "qt",
    plural: "quarts",
    pluralAbbreviation: "qts",
  },
  gallon: {
    abbreviation: "gal",
    plural: "gallons",
    pluralAbbreviation: "gals",
  },
  "fluid ounce": {
    abbreviation: "fl oz",
    plural: "fluid ounces",
    pluralAbbreviation: "fl ozs",
  },
  gram: {
    abbreviation: "g",
    plural: "grams",
    pluralAbbreviation: "grams",
  },
  kilogram: {
    abbreviation: "kg",
    plural: "kilograms",
    pluralAbbreviation: "kgs",
  },
  ounce: {
    abbreviation: "oz",
    plural: "ounces",
    pluralAbbreviation: "ozs",
  },
  pound: {
    abbreviation: "lb",
    plural: "pounds",
    pluralAbbreviation: "lbs",
  },
};

export default measuringUnits;
