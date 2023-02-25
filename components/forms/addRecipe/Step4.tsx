import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../ui/Form";
import useFormContext from "../../../hooks/useFormContext";
import { AddRecipeStep4 } from "../../../types/FormTypes";
import Button from "../../ui/Button";



const Step4 = () => {
  const { setCurrentStep, formData, setFormData } = useFormContext()
  const { numberOfServings, nutrition } = formData;
  const { calories, protein, carbs, fats } = nutrition;
  const defaultValues: AddRecipeStep4 = {
    numberOfServings,
    calories,
    protein,
    carbs,
    fats,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  const onSubmit = async (formData: AddRecipeStep4) => {
    const { numberOfServings, calories, protein, carbs, fats } = formData;
    setFormData(formData => ({
      ...formData,
      numberOfServings,
      nutrition: {
        ...formData.nutrition,
        calories,
        protein,
        carbs,
        fats,
      }
    }))
    setCurrentStep(5)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-2">
        <h2 className="font-subHeading text-2xl font-medium">Nutrition</h2>
        <Input
          label="Yield"
          type="number"
          name="numberOfServings"
          required={true}
          register={register}
        />
        <Input
          label="Calories"
          type="number"
          name="calories"
          required={true}
          register={register}
        />
        <Input
          label="Protein"
          type="number"
          name="protein"
          decimal={0.1}
          register={register}
        />
        <Input
          label="Carbs"
          type="number"
          name="carbs"
          decimal={0.1}
          register={register}
        />
        <Input
          label="Fats"
          type="number"
          name="fats"
          decimal={0.1}
          register={register}
        />
      </div>
        <div className="flex gap-4 w-full mt-2 md:justify-end">
          <Button className="w-full" onClick={() => setCurrentStep(3)}>Back</Button>
          <Button className="w-full" type="submit">Next</Button>
        </div>
    </form>
  )
}

export default Step4;