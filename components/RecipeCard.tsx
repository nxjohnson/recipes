import Image from "next/image";
import { Recipe } from "../types/RecipeTypes";
import Link from 'next/link'

interface Props {
  recipe: Recipe;
}
const RecipeCard = ({ recipe }: Props) => {
  const { _id, recipeName, image } = recipe;
  return (
    <>
      <Link
        href={{
          pathname: `/recipes/${recipeName}`,
          query: { _id },
        }}
      >
      <div className="relative aspect-w-3 aspect-h-2 w-full">
          <Image
            className="object-cover"
            src={image}
            alt={recipeName}
            fill={true}
          />
      </div>
      <div className="m-4 pb-16">
        <h2 className="font-body font-semibold text-xl">{recipeName}</h2>
      </div>
      </Link>
    </>
  );
};

export default RecipeCard;
