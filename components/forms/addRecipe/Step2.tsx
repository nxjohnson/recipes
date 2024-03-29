import { useState } from "react";
import { useForm } from "react-hook-form";
import { Ingredients } from "../../../types/RecipeTypes";
import { Input, Select } from "../../ui/Form";
import Button from "../../ui/Button";
import useFormContext from "../../../hooks/useFormContext";
import SearchBar from "../../ui/SearchBar";
import measuringUnits from "../../utilies/measuringUnits";
import { useRecipe, useRecipeDispatch } from "../../../contexts/RecipeContext";
import FormList from "../../FormList";

const Step2 = () => {
  const recipe = useRecipe();
  const dispatch = useRecipeDispatch();
  const { setCurrentStep } = useFormContext();
  const { ingredients } = recipe;
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

    dispatch({
      type: "delete ingredient",
      data: updatedIngredients,
    });
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
    const { ingredientName, preparation, quantity, unitsOfMeasure } = data;

    const ingredientObj = {
      ingredientId:
        ingredientId || (await getIngredientId(ingredientName.toLowerCase())),
      ingredientName: ingredientName.toLowerCase(),
      preparation: preparation.toLowerCase(),
      quantity,
      unitsOfMeasure,
    };

    dispatch({
      type: "add ingredient",
      data: ingredientObj,
    });

    setIngredientId(null);
    reset();
  };

  const nextStep = () => {
    if (!ingredients.length) {
      return;
    }

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
            <Select
              label="Units of Measure"
              name="unitsOfMeasure"
              options={Object.keys(measuringUnits)}
              register={register}
            />
          </div>
          <div className="flex gap-2">
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
      <FormList list={ingredients} card='ingredient' removeCard={removeIngredient} />
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
