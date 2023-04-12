import { RecipeFilters } from "../types/RecipeTypes"
import { useForm } from "react-hook-form";
import { Select } from "./ui/Form"
import { useRouter } from "next/router";
import { ChangeEvent } from "react";

interface Props {
  category: RecipeFilters
}

export default function Filters({ category }: Props) {
  const router = useRouter();

  const categoryFilter: RecipeFilters[] = [
    "Apps",
    "Bread",
    "Breakfast",
    "Mains",
    "Sides",
    "Sweets",
    "View All"
  ];

  const defaultValues = {
    category: category
  }

  const {
    register,
  } = useForm({ defaultValues });

  function handleFilters(event: ChangeEvent) {
    const filter = (event.target as HTMLSelectElement).value;

    router.push({
      pathname: '/recipes',
      query: { category: filter }
    })
  }

  return (
    <div className="flex flex-col gap-2">
      <form>
        <Select label={'Category'} name="category" options={categoryFilter} register={register} onChange={(e) => handleFilters(e)} />
      </form>
    </div>
  )
}