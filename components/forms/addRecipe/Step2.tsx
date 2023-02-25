import { useState } from "react";
import { useForm } from "react-hook-form";
import { Ingredients } from "../../../types/RecipeTypes";
import { Input } from "../../ui/Form";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import formatFraction from "../../utilies/formatFraction";
import Button from "../../ui/Button";
import useFormContext from "../../../hooks/useFormContext";

const Step2 = () => {
  const { setCurrentStep, formData, setFormData } = useFormContext();
  const { ingredients } = formData;
  const defaultValues: Ingredients = {
    ingredientName: "",
    quantity: null,
    unitsOfMeasure: "",
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ defaultValues });

  const removeIngredient = (index: number): void => {
    const updatedIngredients = ingredients.filter((ingredient, i) => i !== index);
    setFormData(formData => ({
      ...formData,
      ingredients: updatedIngredients
    }));
  }

  const onSubmit = async (data: Ingredients): Promise<void> => {
    setFormData(formData => ({
      ...formData,
      ingredients: [...formData.ingredients, data]
    }))
    reset();
  }

  const nextStep = () => {
    if (!ingredients.length) {
      return;
    }
    setFormData(formData => ({
      ...formData,
      ingredients,
    }))
    setCurrentStep(3)
  }

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="font-subHeading text-2xl font-medium">Ingredients</h2>
          <div className="flex gap-2">
            <Input
              label="Quantity"
              type="number"
              name="quantity"
              decimal={0.01}
              register={register}
            />
            <Input
              label="Units of Measure"
              type="text"
              name="unitsOfMeasure"
              register={register}
            />
          </div>
          <Input
            label="Ingredient Name"
            type="text"
            name="ingredientName"
            required={true}
            register={register}
          />
          <Button type="submit">Add Ingredient</Button>
        </div>
      </form>
      <div className={ingredients.length ? "flex flex-col divide-y-2 divide-neutral-200" : "hidden"}>
        {ingredients.map((ingredient, index) => {
          const { ingredientName, quantity, unitsOfMeasure } = ingredient;
          return (
            <div key={ingredientName} className="flex justify-between h-12">
              <span className="self-center">{`${quantity ? formatFraction(quantity) : ''} ${unitsOfMeasure} ${ingredientName}`}</span>
              <MdOutlineRemoveCircleOutline
                className="self-center text-3xl cursor-pointer"
                onClick={() => removeIngredient(index)}
              />
            </div>
          )
        })}
      </div>
      <div className="flex gap-4 w-full md:justify-end">
        <Button className="w-full" onClick={() => setCurrentStep(1)}>Back</Button>
        <Button className="w-full" onClick={nextStep}>Next</Button>
      </div>
    </div>
  )
}

export default Step2;