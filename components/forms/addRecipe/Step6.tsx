import Image from "next/image";
import { MouseEventHandler } from "react";
import { useRecipe } from "../../../contexts/RecipeContext";
import useFormContext from "../../../hooks/useFormContext";
import Button from "../../ui/Button";
import formatFraction from "../../utilies/formatFraction";
import formatTime from "../../utilies/formatTime";

interface Props {
  addRecipe: MouseEventHandler<Element>;
}

const Step6 = ({ addRecipe }: Props) => {
  const recipe = useRecipe();
  const { setCurrentStep } = useFormContext();
  const {
    activeTime,
    attributes,
    image,
    ingredients,
    notes,
    numberOfServings,
    nutrition,
    recipeDirections,
    recipeName,
    source,
    totalTime,
  } = recipe;
  const { category } = attributes;
  const { calories, protein, carbs, fats } = nutrition;
  const { sourceName, sourceUrl } = source;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end w-full pb-2 border-b-2 border-neutral-200">
        <h2 className="font-subHeading text-2xl font-medium">Recipe Details</h2>
        <span
          className="text-sm font-light underline cursor-pointer"
          onClick={() => setCurrentStep(1)}
        >
          Edit
        </span>
      </div>
      <div className="relative aspect-2/3 mt-2">
        <Image
          className="object-cover"
          src={image!}
          alt="Uploaded image"
          fill={true}
          priority
        />
      </div>
      <p className="font-semibold">Recipe Name</p>
      <p>{recipeName}</p>
      <p className="font-semibold">Recipe Author</p>
      <p>{sourceName}</p>
      <p className="font-semibold">Recipe Url</p>
      <p>{sourceUrl ? sourceUrl : "-"}</p>
      <p className="font-semibold">Category</p>
      <p>{category}</p>
      <p className="font-semibold">Active Time</p>
      <p>{formatTime(activeTime)}</p>
      <p className="font-semibold">Total Time</p>
      <p>{formatTime(totalTime)}</p>
      <div className="flex justify-between items-end w-full mt-4 pb-2 border-b-2 border-neutral-200">
        <h2 className="font-subHeading text-2xl font-medium">Ingredients</h2>
        <span
          className="text-sm font-light underline cursor-pointer"
          onClick={() => setCurrentStep(2)}
        >
          Edit
        </span>
      </div>
      {ingredients.map((ingredient) => {
        const { ingredientName, quantity, unitsOfMeasure, preparation } = ingredient;
        return (
          <p key={ingredientName}>{`${
            quantity ? formatFraction(quantity) : ""
          } ${unitsOfMeasure} ${ingredientName}`}{preparation ? `, ${preparation}` : ""}</p>
        );
      })}
      <div className="flex justify-between items-end w-full mt-4 pb-2 border-b-2 border-neutral-200">
        <h2 className="font-subHeading text-2xl font-medium">Directions</h2>
        <span
          className="text-sm font-light underline cursor-pointer"
          onClick={() => setCurrentStep(3)}
        >
          Edit
        </span>
      </div>
      {recipeDirections.map((step, index) => {
        const currentStep: string = `Step ${index + 1}`;
        return (
          <div key={currentStep}>
            <p className="block font-semibold">{currentStep}</p>
            <p>{step}</p>
          </div>
        );
      })}

      <div className="flex justify-between items-end w-full mt-4 pb-2 border-b-2 border-neutral-200">
        <h2 className="font-subHeading text-2xl font-medium">Recipe Notes</h2>
        <span
          className="text-sm font-light underline cursor-pointer"
          onClick={() => setCurrentStep(4)}
        >
          Edit
        </span>
      </div>
      <p className="font-semibold">Recipe Notes</p>
      <p>{notes ? notes : "-"}</p>

      <div className="flex justify-between items-end w-full mt-4 pb-2 border-b-2 border-neutral-200">
        <h2 className="font-subHeading text-2xl font-medium">Nutrition</h2>
        <span
          className="text-sm font-light underline cursor-pointer"
          onClick={() => setCurrentStep(5)}
        >
          Edit
        </span>
      </div>
      <p className="font-semibold">Yield</p>
      <p>{numberOfServings}</p>
      <p className="font-semibold">Calories</p>
      <p>{calories}</p>
      <p className="font-semibold">Protein</p>
      <p>{protein ? `${protein}g` : "-"}</p>
      <p className="font-semibold">Carbs</p>
      <p>{carbs ? `${carbs}g` : "-"}</p>
      <p className="font-semibold">Fats</p>
      <p>{fats ? `${fats}g` : "-"}</p>
      <div className="flex gap-4 md:justify-end w-full mt-2">
        <Button onClick={() => setCurrentStep(5)}>Back</Button>
        <Button onClick={() => addRecipe(recipe)}>Submit</Button>
      </div>
    </div>
  );
};

export default Step6;
