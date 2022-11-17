import { FunctionComponent, useState } from "react";
import PageHeader from "../../components/layouts/PageHeader";
import RecipeCard from "../../components/RecipeCard";
import { Recipe, example } from "../../types/RecipeTypes";

const Recipes: FunctionComponent = () => {
  const [recipes, setRecipes] = useState<Recipe[] | []>(example);
  return (
    <div>
      <PageHeader header="Recipes">
        <div>Content</div>
      </PageHeader>
      <div className="grid grid-cols-4 gap-8">
        {recipes.map((recipe) => {
          return (
            <div className="h-full border border-t-0 border-neutral-300" key={recipe.recipeName}>
              <RecipeCard recipe={recipe} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
