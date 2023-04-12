import { Ingredients } from "../types/RecipeTypes";
import DirectionCard from "./DirectionCard";
import IngredientCard from "./IngredientCard";

interface Props {
  list: Ingredients[] | string[];
  card: "direction" | "ingredient";
  removeCard: any;
}

const FormList = ({ list, card, removeCard }: Props) => {
  const renderList = (content: Ingredients | string, index: number) => {
    switch (card) {
      case "ingredient": {
        if (typeof content === "string") {
          return;
        }
        return (
          <IngredientCard
            key={index}
            content={content}
            index={index}
            removeCard={removeCard}
          />
        );
      }
      case "direction": {
        if (typeof content !== "string") {
          return;
        }
        return (
          <DirectionCard
            key={index}
            content={content}
            index={index}
            removeCard={removeCard}
          />
        );
      }
      default: {
        throw Error(`Unkown list ${card}`);
      }
    }
  };
  return (
    <ul className={list.length ? "flex flex-col gap-2" : "hidden"}>
      {list.map((content, index) => renderList(content, index))}
    </ul>
  );
};

export default FormList;
