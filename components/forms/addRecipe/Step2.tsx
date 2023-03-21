import { useState } from "react";
import { useForm } from "react-hook-form";
import { Ingredients } from "../../../types/RecipeTypes";
import { Input, Select } from "../../ui/Form";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import formatFraction from "../../utilies/formatFraction";
import Button from "../../ui/Button";
import useFormContext from "../../../hooks/useFormContext";
import SearchBar from "../../ui/SearchBar";
import measuringUnits from "../../utilies/measuringUnits";
import formatMeasuringUnits from "../../utilies/formatMeasuringUnits";

const Step2 = () => {
  const { setCurrentStep, formData, setFormData } = useFormContext();
  const { ingredients } = formData;
  const [ingredientId, setIngredientId] = useState<number | null>(null);
  const defaultValues: Ingredients = {
    ingredientName: "",
    preparation: "",
    quantity: null,
    unitsOfMeasure: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({ defaultValues });

  const removeIngredient = (index: number): void => {
    const updatedIngredients = ingredients.filter(
      (ingredient, i) => i !== index
    );
    setFormData((formData) => ({
      ...formData,
      ingredients: updatedIngredients,
    }));
  };

  async function getIngredientId(ingredient: string) {
    try {
      const response = await fetch(
        `/api/ingredients/id?ingredient=${ingredient}`,
        { method: "GET" }
      );
      const id = response.json();
      return id;
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (data: Ingredients): Promise<void> => {
    const { ingredientName, preparation, quantity, unitsOfMeasure } =
      data;
    if (!ingredientId) {
      const response = await getIngredientId(ingredientName.toLowerCase());
    }

    const ingredientObj = {
      ingredientId,
      ingredientName: ingredientName.toLowerCase(),
      preparation: preparation.toLowerCase(),
      quantity,
      unitsOfMeasure,
    };

    setFormData((formData) => ({
      ...formData,
      ingredients: [...formData.ingredients, ingredientObj],
    }));
    setIngredientId(null);
    reset();
  };

  const nextStep = () => {
    if (!ingredients.length) {
      return;
    }
    setFormData((formData) => ({
      ...formData,
      ingredients,
    }));
    setCurrentStep(3);
  };

  return (
    <div className="flex flex-col gap-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-2"
      >
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
            {/* <Input
              label="Units of Measure"
              type="text"
              name="unitsOfMeasure"
              register={register}
            /> */}
            <Select
              label="Units of Measure"
              name="unitsOfMeasure"
              options={Object.keys(measuringUnits)}
              register={register}
            />
          </div>
          <div className="flex gap-2">
            {/* <Input
              label="Ingredient Name"
              type="text"
              name="ingredientName"
              required={true}
              register={register}
            /> */}
            <SearchBar
              label="Ingredient Name"
              name="ingredientName"
              register={register}
              setValue={setValue}
              setIngredientId={setIngredientId}
            />
            <Input
              label="Preparation"
              type="text"
              name="preparation"
              register={register}
            />
          </div>
          <Button type="submit">Add Ingredient</Button>
        </div>
      </form>
      <div
        className={
          ingredients.length
            ? "flex flex-col divide-y-2 divide-neutral-200"
            : "hidden"
        }
      >
        {ingredients.map((ingredient, index) => {
          const { ingredientName, quantity, preparation, unitsOfMeasure } =
            ingredient;
          return (
            <div key={ingredientName} className="flex justify-between h-12">
              <span className="self-center">{`${
                quantity ? formatFraction(quantity) : ""
              } ${formatMeasuringUnits(
                quantity,
                unitsOfMeasure
              )} ${ingredientName}${
                preparation ? `, ${preparation.toLowerCase()}` : ""
              }`}</span>
              <MdOutlineRemoveCircleOutline
                className="self-center text-3xl cursor-pointer"
                onClick={() => removeIngredient(index)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 w-full md:justify-end">
        <Button className="w-full" onClick={() => setCurrentStep(1)}>
          Back
        </Button>
        <Button className="w-full" onClick={nextStep}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
