interface Fractions {
  "25": "¼";
  "5": "½";
  "50": "½";
  "75": "¾";
}

type Decimal = undefined | string;

const formatFraction = (number: number | null): string => {
  if (!number) {
    return "";
  }
  const fractions: Fractions = {
    "25": "¼",
    "5": "½",
    "50": "½",
    "75": "¾",
  };
  const numArray: string[] = number.toString().split(".");
  const decimal: Decimal = numArray[1];

  if (!decimal) {
    return numArray[0];
  }

  if (numArray[0] === '0') {
    return `${fractions[decimal as keyof Fractions]}`
  }

  return `${numArray[0]}${fractions[decimal as keyof Fractions]}`;
};

export default formatFraction;
