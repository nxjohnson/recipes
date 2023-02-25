import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { Input, Select, TextArea } from "../ui/Form";
import ImageUpload from "../../components/ui/ImageUpload";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import Button from "../../components/ui/Button";
import type { Ingredients, Recipe } from "../../types/RecipeTypes";
import { AddRecipeFormFields } from "../../types/FormTypes";
import { useState } from "react";

interface Props {
  onSubmit: SubmitHandler<AddRecipeFormFields>;
}

const AddRecipeForm = ({ onSubmit }: Props) => {
  const [image, setImage] = useState<string | null>(null);
  const [ingredientList, setIngredientList] = useState<Ingredients[]>([]);

  const categoryOptions: string[] = [
    "Apps",
    "Bread",
    "Breakfast",
    "Mains",
    "Sides",
    "Sweets",
  ];

  const defaultValues: AddRecipeFormFields = {
    recipeName: "",
    sourceName: "",
    sourceUrl: null,
    numberOfServings: 1,
    category: "",
    ingredients: [{ ingredientName: "", quantity: null, unitsOfMeasure: "" }],
    directions: [{ recipeDirections: "" }],
    activeTime: 0,
    totalTime: 0,
    calories: 0,
    protein: null,
    carbs: null,
    fats: null,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddRecipeFormFields>({ defaultValues });

  const {
    fields: ingredientFields,
    append: ingredientAppend,
    remove: ingredientRemove,
  } = useFieldArray({ name: "ingredients", control });

  const {
    fields: directionFields,
    append: directionAppend,
    remove: directionRemove,
  } = useFieldArray({ name: "directions", control });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-2 lg:w-3/4">
      <div className="flex flex-col gap-2">
        <h2 className="font-subHeading text-2xl font-medium">Recipe Details</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <ImageUpload image={image} setImage={setImage} />
          {/* <div className="w-1/2 aspect-2/3 bg-neutral-200"></div> */}
        </div>
        <Input
          label="Recipe Name"
          type="text"
          placeholder="Recipe Name"
          name="recipeName"
          required={true}
          register={register}
        />
        <Input
          label="Recipe Author"
          type="text"
          placeholder="Recipe Author"
          name="sourceName"
          required={true}
          register={register}
        />
        {/* ToDo: Use Regex to define correct url */}
        <Input
          label="Recipe URL"
          type="text"
          placeholder="Recipe URL"
          name="sourceUrl"
          register={register}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-subHeading text-2xl font-medium">Ingredients</h2>
        {ingredientFields.map((field, index) => {
          return (
            <div key={field.id} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Input
                  label="Quantity"
                  type="number"
                  placeholder="Quantity"
                  name={`ingredients.${index}.quantity`}
                  decimal={0.01}
                  register={register}
                />
                <Input
                  label="Units of Measure"
                  type="text"
                  placeholder="Units of Measure"
                  name={`ingredients.${index}.unitsOfMeasure`}
                  register={register}
                />
              </div>
              <Input
                label="Ingredient Name"
                type="text"
                placeholder="Ingredient Name"
                name={`ingredients.${index}.ingredientName`}
                required={true}
                register={register}
              />
              {/* <MdOutlineRemoveCircleOutline
                className="text-3xl cursor-pointer"
                onClick={() => ingredientRemove(index)}
              /> */}
            </div>
          );
        })}
        <Button
          onClick={() => {
            ingredientAppend({
              ingredientName: "",
              quantity: 0,
              unitsOfMeasure: "",
            });
          }}
        >
          Add Ingredient
        </Button>
        <div>
          {ingredientList.map((ingredient, index) => {
            const { ingredientName, quantity, unitsOfMeasure } = ingredient;
            return (
              <div key={ingredientName} className="flex justify-between">
                <p>{`${quantity} ${unitsOfMeasure} ${ingredientName}`}</p>
                <MdOutlineRemoveCircleOutline
                className="text-3xl cursor-pointer"
                onClick={() => ingredientRemove(index)}
              />
              </div>
            )
          })}
        </div>
      </div>

      {/* <div className="flex flex-col gap-4 border mb-8">

        <Select
          label="Category"
          name="category"
          options={categoryOptions}
          required={true}
          register={register}
        />
      </div>

      <div className="flex flex-col gap-4 border mb-8">
        <label>Ingredients</label>
        {ingredientFields.map((field, index) => {
          return (
            <div key={field.id} className="flex flex-col items-center gap-4 w-full">
              <Input
                label="Quantity"
                type="number"
                placeholder="Quantity"
                name={`ingredients.${index}.quantity`}
                decimal={0.01}
              />
              <Input
                label="Units of Measure"
                type="text"
                placeholder="Units of Measure"
                name={`ingredients.${index}.unitsOfMeasure`}
              />
              <Input
                label="Ingredient Name"
                type="text"
                placeholder="Ingredient Name"
                name={`ingredients.${index}.ingredientName`}
                required={true}
              />
              <MdOutlineRemoveCircleOutline
                className="text-3xl cursor-pointer"
                onClick={() => ingredientRemove(index)}
              />
            </div>
          );
        })}
        <Button
          onClick={() => {
            ingredientAppend({
              ingredientName: "",
              quantity: 0,
              unitsOfMeasure: "",
            });
          }}
        >
          Add Ingredient
        </Button>
      </div>

      <div className="flex flex-col gap-4 border mb-8">
        <label>Directions</label>
        {directionFields.map((field, index) => {
          return (
            <div key={field.id} className="flex items-center">
              <TextArea
                label={`Step ${index + 1}`}
                register={register}
                name={`directions.${index}.recipeDirections`}
                required={true}
              />
              <MdOutlineRemoveCircleOutline
                className="text-3xl cursor-pointer ml-4"
                onClick={() => directionRemove(index)}
              />
            </div>
          );
        })}
        <Button
          onClick={() => {
            directionAppend({ recipeDirections: "" });
          }}
        >
          Add Step
        </Button>
      </div>

      <div className="flex flex-col gap-4 border mb-8">
        <Input
          label="Yield"
          type="number"
          placeholder="Yield"
          name="numberOfServings"
          required={true}
        />
        <Input
          label="Active Time"
          type="number"
          placeholder="Active Time"
          name="activeTime"
          required={true}
        />
        <Input
          label="Total Time"
          type="number"
          placeholder="Total Time"
          name="totalTime"
          required={true}
        />
      </div> */}

      {/* <div className="flex flex-col gap-4 border mb-8">
        <Input
          label="Calories"
          type="number"
          placeholder="Calories"
          name="calories"
          required={true}
        />
        <Input
          label="Protein"
          type="number"
          placeholder="Protein"
          name="protein"
          decimal={0.1}
        />
        <Input
          label="Carbs"
          type="number"
          placeholder="Carbs"
          name="carbs"
          decimal={0.1}
        />
        <Input
          label="Fats"
          type="number"
          placeholder="Fats"
          name="fats"
          decimal={0.1}
        />
      </div> */}

      {/* <div className="flex flex-col gap-4 border mb-8">
        <input
          className="bg-neutral-900 text-neutral-50"
          type="submit"
          value="Add Recipe"
        />
      </div> */}
    </form>
  );
};

export default AddRecipeForm;
