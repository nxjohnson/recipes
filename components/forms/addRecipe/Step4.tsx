import { useForm } from "react-hook-form";
import { TextArea } from "../../ui/Form";
import useFormContext from "../../../hooks/useFormContext";
import { AddRecipeStep4 } from "../../../types/FormTypes";
import Button from "../../ui/Button";
import { useRecipe, useRecipeDispatch } from "../../../contexts/RecipeContext";

const Step4 = () => {
  const recipe = useRecipe();
  const dispatch = useRecipeDispatch();
  const { setCurrentStep } = useFormContext();
  const { notes } = recipe;
  const defaultValues: AddRecipeStep4 = {
    notes,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  const onSubmit = async (data: AddRecipeStep4) => {
    dispatch({
      type: "update step4",
      data,
    });

    setCurrentStep(5);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-2"
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-subHeading text-2xl font-medium">Recipe Notes</h2>
        <TextArea label="Recipe Notes" name="notes" register={register} />
      </div>
      <div className="flex gap-4 w-full mt-2 md:justify-end">
        <Button className="w-full" onClick={() => setCurrentStep(3)}>
          Back
        </Button>
        <Button className="w-full" type="submit">
          Next
        </Button>
      </div>
    </form>
  );
};

export default Step4;
