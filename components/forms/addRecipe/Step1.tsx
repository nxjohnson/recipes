import { useForm } from "react-hook-form";
import { Input, Select } from "../../ui/Form";
import ImageUpload from "../../layouts/ImageUpload";
import useFormContext from "../../../hooks/useFormContext";
import { AddRecipeStep1 } from "../../../types/FormTypes";
import { RecipeCategory } from "../../../types/RecipeTypes";
import Button from "../../ui/Button";
import { useRecipe, useRecipeDispatch } from "../../../contexts/RecipeContext";

const Step1 = () => {
  const recipe = useRecipe();
  const dispatch = useRecipeDispatch();
  const { setCurrentStep } = useFormContext();
  const { image, recipeName, source, attributes, activeTime, totalTime } =
    recipe;
  const { sourceName, sourceUrl } = source;
  const { category } = attributes;
  const defaultValues: AddRecipeStep1 = {
    recipeName,
    sourceName,
    sourceUrl,
    category,
    activeTime,
    totalTime,
  };

  const categoryOptions: RecipeCategory[] = [
    "Apps",
    "Bread",
    "Breakfast",
    "Mains",
    "Sides",
    "Sweets",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  const updateImage = (url: string): void => {
    dispatch({
      type: "update image",
      data: url,
    });
  };

  const onSubmit = async (data: AddRecipeStep1) => {
    if (!image) {
      return;
    }

    dispatch({
      type: "update step1",
      data: { ...data },
    });

    setCurrentStep(2);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-2"
      encType="multipart/form-data"
    >
      <div className="flex flex-col gap-2">
        <h2 className="font-subHeading text-2xl font-medium">Recipe Details</h2>

        <div className="flex flex-col w-full gap-2">
          <ImageUpload
            image={image}
            updateImage={updateImage}
            required={true}
          />

          <Input
            label="Recipe Name"
            type="text"
            name="recipeName"
            required={true}
            register={register}
          />
          <Input
            label="Recipe Author"
            type="text"
            name="sourceName"
            required={true}
            register={register}
          />
          {/* ToDo: Use Regex to define correct url */}
          <Input
            label="Recipe Url"
            type="text"
            name="sourceUrl"
            register={register}
          />
          <Select
            label="Category"
            name="category"
            options={categoryOptions}
            required={true}
            register={register}
          />
          <Input
            label="Active Time"
            type="number"
            name="activeTime"
            required={true}
            register={register}
          />
          <Input
            label="Total Time"
            type="number"
            name="totalTime"
            required={true}
            register={register}
          />
        </div>
        <div className="flex gap-4 md:justify-end w-full mt-2">
          <Button className="invisible" onClick={() => setCurrentStep(0)}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </div>
    </form>
  );
};

export default Step1;
