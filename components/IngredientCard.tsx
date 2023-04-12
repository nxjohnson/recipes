import { MouseEventHandler } from "react";
import { MdOutlineClear } from "react-icons/md";
import { Ingredients } from "../types/RecipeTypes";
import formatFraction from "./utilies/formatFraction";
import formatMeasuringUnits from "./utilies/formatMeasuringUnits";

interface Props {
  content: Ingredients;
  index: number;
  removeCard: any;
}

const IngredientCard = ({ content, index, removeCard }: Props) => {
  const { ingredientName } = content;
  const quantity = content.quantity ? formatFraction(content.quantity) : "";
  const unitsOfMeasure = formatMeasuringUnits(
    content.quantity,
    content.unitsOfMeasure
  );
  const preparation = content.preparation
    ? `, ${content.preparation.toLowerCase()}`
    : "";

  return (
    <li className="p-6 bg-neutral-100">
      <div className="flex justify-between items-center">
        <p className="block text-lg font-medium">{`${quantity} ${unitsOfMeasure} ${ingredientName}${preparation}`}</p>
        <MdOutlineClear
          className="shrink-0 text-2xl cursor-pointer"
          onClick={() => removeCard(index)}
        />
      </div>
    </li>
  );
};

export default IngredientCard;
