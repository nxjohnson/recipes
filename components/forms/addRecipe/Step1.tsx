import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Select } from "../../ui/Form";
import ImageUpload from "../../layouts/ImageUpload";
import useFormContext from "../../../hooks/useFormContext";
import { AddRecipeStep1 } from "../../../types/FormTypes";
import Button from "../../ui/Button";

const Step1 = () => {
  const { setCurrentStep, formData, setFormData } = useFormContext();
  const { image, recipeName, source, attributes, activeTime, totalTime } =
    formData;
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

  const categoryOptions: string[] = [
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
    setFormData((formData) => ({
      ...formData,
      image: url,
    }));
  };

  const onSubmit = async (data: AddRecipeStep1) => {
    if (!image) {
      return;
    }

    const {
      recipeName,
      sourceName,
      sourceUrl,
      category,
      activeTime,
      totalTime,
    } = data;
    setFormData((formData) => ({
      ...formData,
      image,
      recipeName,
      activeTime,
      totalTime,
      source: {
        ...formData.source,
        sourceName,
        sourceUrl,
      },
      attributes: {
        ...formData.attributes,
        category,
      },
    }));

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
          <Button
            className="invisible"
            onClick={() => setCurrentStep(0)}
          >
            Back
          </Button>
          <Button type="submit">
            Next
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Step1;
