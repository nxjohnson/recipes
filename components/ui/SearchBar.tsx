import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Input } from "./Form";

interface Props {
  label: string;
  register: any;
  name: string;
  required?: boolean;
  setValue: any;
  setIngredientId: Dispatch<SetStateAction<number | null>>;
}

interface SearchResult {
  id?: number;
  ingredient_name: string;
}

export default function SearchBar({ label, name, register, setValue, setIngredientId }: Props) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
    null
  );

  async function handleChange(event: ChangeEvent) {
    const query: string = (event.target as HTMLInputElement).value;
    const resopnse = await fetch(`/api/ingredients?query=${query}`, {
      method: "GET",
    });
    const results = await resopnse.json();
    setSearchResults(results);
  }

  function handleSelectedResult(result: SearchResult) {
    setSelectedResult(result);
    setIngredientId(result.id!)
    setValue(name, result.ingredient_name)
    setSearchResults([]);
  }

  return (
    <div>
      <Input
        type="text"
        label={label}
        name={name}
        register={register}
        onChange={(e) => handleChange(e)}
      />
      {searchResults.length ? (
        <ul>
          {searchResults.map((result) => {
            const { id, ingredient_name } = result;
            return (
              <li key={id} onClick={() => handleSelectedResult(result)}>
                {ingredient_name}
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
