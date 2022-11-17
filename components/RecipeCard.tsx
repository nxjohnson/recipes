import Image from "next/image";
import { Recipe } from "../types/RecipeTypes";

interface Props {
  recipe: Recipe;
}
const RecipeCard = ({ recipe }: Props) => {
  const { recipeName, image } = recipe;
  return (
    <>
      <div className="relative aspect-w-4 aspect-h-3 w-full">
        <Image
          className="object-cover"
          src={image}
          alt={recipeName}
          fill={true}
        />
      </div>
      <div className="m-4">
        <h2 className="font-body font-semibold text-xl">{recipeName}</h2>
      </div>
    </>
  );
};

export default RecipeCard;
