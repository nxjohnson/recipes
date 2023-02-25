interface Props {
  recipeDirections: string[]
}

const RecipeDirections = ({ recipeDirections }: Props) => {
  return(
    <div className="flex flex-col gap-2 pt-4  border-t-2 border-neutral-200 md:w-1/2">
      <h2 className="font-subHeading text-2xl lg:text-4xl">step by step</h2>
      <ul className="flex flex-col gap-4">
        { recipeDirections.map((direction, index) => {
          return (
            <li key={`Step ${index + 1}`}>
              <p className="font-bold">{`Step ${index + 1}`}</p>
              <p>{direction}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecipeDirections;