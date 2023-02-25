import Image from 'next/image';
import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react';
import useFormContext from "../../../hooks/useFormContext";
import { Recipe } from "../../../types/RecipeTypes";
import Button from "../../ui/Button";
import formatFraction from "../../utilies/formatFraction";
import formatTime from "../../utilies/formatTime";

interface Props {
  addRecipe: MouseEventHandler<Element>;
}

const Step5 = ({ addRecipe }: Props) => {
  const router = useRouter();
  const { setCurrentStep, formData } = useFormContext()
  const {
    activeTime,
    attributes,
    image,
    ingredients,
    numberOfServings,
    nutrition,
    recipeDirections,
    recipeName,
    source,
    totalTime,
  } = formData;
  const { category } = attributes;
  const { calories, protein, carbs, fats } = nutrition;
  const { sourceName, sourceUrl } = source;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end w-full pb-2 border-b-2 border-neutral-200">
        <h2 className="font-subHeading text-2xl font-medium">Recipe Details</h2>
        <span className="text-sm font-light underline cursor-pointer" onClick={() => setCurrentStep(1)}>Edit</span>
      </div>
      <div className='relative aspect-2/3 mt-2'>
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
      <p>{sourceUrl ? sourceUrl : '-' }</p>
      <p className="font-semibold">Category</p>
      <p>{category}</p>
      <p className="font-semibold">Active Time</p>
      <p>{formatTime(activeTime)}</p>
      <p className="font-semibold">Total Time</p>
      <p>{formatTime(totalTime)}</p>
      <div className="flex justify-between items-end w-full mt-4 pb-2 border-b-2 border-neutral-200">
        <h2 className="font-subHeading text-2xl font-medium">Ingredients</h2>
        <span className="text-sm font-light underline cursor-pointer" onClick={() => setCurrentStep(2)}>Edit</span>
      </div>
      {ingredients.map((ingredient) => {
        const { ingredientName, quantity, unitsOfMeasure } = ingredient;
        return (
          <p key={ingredientName}>{`${quantity ? formatFraction(quantity) : ''} ${unitsOfMeasure} ${ingredientName}`}</p>
        )
      })}
      <div className="flex justify-between items-end w-full mt-4 pb-2 border-b-2 border-neutral-200">
        <h2 className="font-subHeading text-2xl font-medium">Directions</h2>
        <span className="text-sm font-light underline cursor-pointer" onClick={() => setCurrentStep(3)}>Edit</span>
      </div>
      {recipeDirections.map((step, index) => {
        const currentStep: string = `Step ${index + 1}`;
        return (
          <div key={currentStep}>
            <p className="block font-semibold">{currentStep}</p>
            <p>{step}</p>
          </div>
        )
      })}
      <div className="flex justify-between items-end w-full mt-4 pb-2 border-b-2 border-neutral-200">
        <h2 className="font-subHeading text-2xl font-medium">Nutrition</h2>
        <span className="text-sm font-light underline cursor-pointer" onClick={() => setCurrentStep(4)}>Edit</span>
      </div>
      <p className="font-semibold">Yield</p>
      <p>{numberOfServings}</p>
      <p className="font-semibold">Calories</p>
      <p>{calories}</p>
      <p className="font-semibold">Protein</p>
      <p>{protein ? protein : '-'}</p>
      <p className="font-semibold">Carbs</p>
      <p>{carbs ? carbs : '-'}</p>
      <p className="font-semibold">Fats</p>
      <p>{fats ? fats : '-'}</p>
      <div className="flex gap-4 md:justify-end w-full mt-2">
        <Button onClick={() => setCurrentStep(4)}>
          Back
        </Button>
        <Button onClick={addRecipe}>Submit</Button>
      </div>
    </div>
  )
}

export default Step5;