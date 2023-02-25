import type { Nutrition } from "../types/RecipeTypes";

interface Props {
  nutrition: Nutrition
}

const NutritionalInfo = ({ nutrition }: Props): JSX.Element => {
  const { calories, protein, carbs, fats } = nutrition;

  return(
    <div className="grid grid-cols-3 justify-items-center">
      <div className="col-span-3">{`${calories} Calories`}</div>
      <div>{`${protein ? protein : '0'}g Protein`}</div>
      <div>{`${carbs ? carbs : '0'}g Carbs`}</div>
      <div>{`${fats ? fats : '0'}g Fats`}</div>
    </div>
  )
  }

export default NutritionalInfo;