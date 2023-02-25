import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextArea } from "../../ui/Form";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import Button from "../../ui/Button";
import useFormContext from "../../../hooks/useFormContext";

interface Direction {
  direction: string
}

const Step3 = () => {
  const { setCurrentStep, formData, setFormData } = useFormContext()
  const { recipeDirections } = formData;
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
    setFormData(formData => ({
      ...formData,
      recipeDirections: updatedDirections
    }))
  }

  const onSubmit = async (data: Direction): Promise<void> => {
    setFormData(formData => ({
      ...formData,
      recipeDirections: [...formData.recipeDirections, data.direction]
    }))
    reset();
  }

  const nextStep = () => {
    if (!recipeDirections.length) {
      return;
    }
    setFormData(formData => ({
      ...formData,
      recipeDirections,
    }))
    setCurrentStep(4)
  }

  return (
    <div className="flex flex-col gap-2">
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
      <div className={recipeDirections.length ? "flex flex-col divide-y-2 divide-neutral-200" : "hidden"}>
        {recipeDirections.map((step, index) => {
          const currentStep: string = `Step ${index + 1}`;
          return (
            <div key={currentStep}>
              <p className="block font-medium">{currentStep}</p>
              <div className="flex justify-between h-12">
                <span className="self-center">{step}</span>
                <MdOutlineRemoveCircleOutline
                  className="self-center text-3xl cursor-pointer"
                  onClick={() => removeStep(index)}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex gap-4 w-full md:justify-end">
        <Button className="w-full" onClick={() => setCurrentStep(2)}>Back</Button>
        <Button className="w-full" onClick={nextStep}>Next</Button>
      </div>
    </div>
  )
}

export default Step3;