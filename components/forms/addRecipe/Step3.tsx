import { useForm } from "react-hook-form";
import { TextArea } from "../../ui/Form";
import Button from "../../ui/Button";
import useFormContext from "../../../hooks/useFormContext";
import { useRecipe, useRecipeDispatch } from "../../../contexts/RecipeContext";
import FormList from "../../FormList";

interface Direction {
  direction: string
}

const Step3 = () => {
  const recipe = useRecipe();
  const dispatch = useRecipeDispatch();
  const { setCurrentStep } = useFormContext()
  const { recipeDirections } = recipe;
  const defaultValues: Direction = {
    direction: ""
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ defaultValues });

  const removeStep = (index: number): void => {
    const updatedDirections = recipeDirections.filter((direction, i) => i !== index);
    dispatch({
      type: 'delete direction',
      data: updatedDirections
    })
  }

  const onSubmit = async (data: Direction): Promise<void> => {
    dispatch({
      type: 'add direction',
      data: data.direction
    })

    reset();
  }

  const nextStep = () => {
    if (!recipeDirections.length) {
      return;
    }

    setCurrentStep(4)
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="font-subHeading text-2xl font-medium">Directions</h2>
          <TextArea
                label={`Step ${recipeDirections.length + 1}`}
                register={register}
                name="direction"
                required={true}
              />
          <Button type="submit">Add Step</Button>
        </div>
      </form>
      <FormList list={recipeDirections} card='direction' removeCard={removeStep} />
      <div className="flex gap-4 w-full md:justify-end">
        <Button className="w-full" onClick={() => setCurrentStep(2)}>Back</Button>
        <Button className="w-full" onClick={nextStep}>Next</Button>
      </div>
    </div>
  )
}

export default Step3;