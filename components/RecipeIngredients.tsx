import type { Ingredients } from "../types/RecipeTypes"
import formatFraction from "./utilies/formatFraction";

interface Props {
  ingredients: Ingredients[]
}

const RecipeIngredients = ({ ingredients }: Props) => {
  return(
    <div className="flex flex-col gap-2 pt-4 border-t-2 border-neutral-200 md:w-1/2">
      <h2 className="font-subHeading text-2xl lg:text-4xl">ingredients</h2>
      <ul>
        {ingredients.map((ingredient: Ingredients) => {
          const { ingredientName, quantity, unitsOfMeasure } = ingredient;
          return(
            <li key={ingredientName}>{`${formatFraction(quantity)} ${unitsOfMeasure} ${ingredientName}`}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecipeIngredients