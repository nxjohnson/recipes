import React from "react"
import { useForm, useFieldArray } from 'react-hook-form';
import { Input, Select, TextArea } from "../components/formComponents";
import { Ingredients } from "../types/RecipeTypes";
import styles from '../styles/AddRecipe.module.css'
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import PageHeader from "../components/layouts/PageHeader";

interface Direction {
  recipeDirections: string
}

type FormFields = {
  recipeName: string,
  sourceName: string,
  sourceUrl?: string,
  numberOfServings: number,
  category: string,
  course: string,
  ingredients: Ingredients[],
  directions: Direction[],
  activeTime: number,
  totalTime: number,
}

const AddRecipe = (): JSX.Element => {
  const categoryOptions: string[] = ['Meat', 'Pasta', 'Soups', 'Veggies', 'Bread', 'Desserts'];
  const courseOptions: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Side', 'Dessert'];
  const defaultValues: FormFields = {
    recipeName: '',
    sourceName: '',
    sourceUrl: '',
    numberOfServings: 1,
    category: '',
    course: '',
    ingredients: [{ingredientName: '', quantity: null, unitsOfMeasure: ''}],
    directions: [{recipeDirections: ''}],
    activeTime: 0,
    totalTime: 0,
  }

  const { register, handleSubmit, formState: { errors }, control } = useForm<FormFields>({defaultValues});

  const {
    fields: ingredientFields,
    append: ingredientAppend,
    remove: ingredientRemove,
  } = useFieldArray({ name: 'ingredients', control});

  const {
    fields: directionFields,
    append: directionAppend,
    remove: directionRemove,
  } = useFieldArray({ name: 'directions', control});

  const onSubmit = data => console.log(data);
  // console.log(errors);

  return (
    <PageHeader header="Add Recipe">
      <form className={styles.temp}onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formCard}>
          <Input label="Recipe Name" type="text" placeholder="Recipe Name" name="recipeName" register={register} />
          <Input label="Recipe Author" type="text" placeholder="Recipe Author" name="sourceName" register={register} />
          <Input label="Recipe URL" type="text" placeholder="Recipe URL" name="sourceUrl" register={register} />
          <Select label="Category" name="category" options={categoryOptions} register={register} />
          <Select label="Course" name="course" options={courseOptions} register={register} />
        </div>

        <div className={styles.formCard}>
          <label>Ingredients</label>
          {ingredientFields.map((field, index) => {
            return (
              <div key={field.id} className={styles.ingredientForm}>
                <Input label="Quantity" type="number" placeholder="Quantity" name={`ingredients.${index}.quantity`} register={register} />
                <Input label="Units of Measure" type="text" placeholder="Units of Measure" name={`ingredients.${index}.unitsOfMeasure`} register={register} />
                <Input label="Ingredient Name" type="text" placeholder="Ingredient Name" name={`ingredients.${index}.ingredientName`} register={register} />
                <MdOutlineRemoveCircleOutline className={styles.removeIcon} onClick={() => ingredientRemove(index)} />
              </div>
            )
          })}
          <button type="button"
            onClick={() => { ingredientAppend({ingredientName: '', quantity: 0, unitsOfMeasure: ''}) }}>
            Add Ingredient
          </button>
        </div>

        <div className={styles.formCard}>
          <label>Directions</label>
          {directionFields.map((field, index) => {
            return (
              <div key={field.id} className={styles.ingredientForm}>
                <TextArea label={`Step ${index + 1}`} register={register} name={`directions.${index}.recipeDirections`} />
                <MdOutlineRemoveCircleOutline className={styles.removeIcon} onClick={() => directionRemove(index)} />
              </div>
            )
          })}
          <button type="button"
            onClick={() => { directionAppend({recipeDirections: ''}) }}>
            Add Step
          </button>
        </div>

        <div className={styles.formCard}>
          <Input label="Yield" type="number" placeholder="Yield" name="numberOfServings" register={register} />
          <Input label="Active Time" type="number" placeholder="Active Time" name="activeTime" register={register} />
          <Input label="Total Time" type="number" placeholder="Total Time" name="totalTime" register={register} />
        </div>

        <div className={styles.formCard}>
          <input type="submit" value="Add Recipe" />
        </div>
      </form>
    </PageHeader>
  )
}

export default AddRecipe