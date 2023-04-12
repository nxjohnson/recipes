import RecipeCard from "../../components/RecipeCard";
import { Recipe, RecipeFilters } from "../../types/RecipeTypes";
import { InferGetServerSidePropsType } from "next";
import { getRecipes } from "../../db/recipe";
import Filters from "../../components/Filters";

interface ServerSideProps {
  query: {
    category: RecipeFilters;
  };
}

const Recipes = ({
  recipes,
  category
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {

  return (
    <div className="flex flex-col w-full gap-8 px-8 py-8 lg:px-24">
      <div className="flex flex-col w-full pb-8 border-b-2 border-neutral-200 md:flex-row">
        <h1 className="font-heading text-4xl md:w-1/2 lg:text-7xl">Recipes</h1>
        <div><Filters category={category} /></div>
      </div>
      {recipes?.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipes.map((recipe: Recipe) => {
            return (
              <div
                className="border border-t-0 border-neutral-300 hover:shadow-lg"
                key={recipe.recipeName}
              >
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>There are no recipes</div>
      )}
    </div>
  );
};

export async function getServerSideProps({ query }: ServerSideProps) {
  const category = query.category as RecipeFilters;
  const recipes = await getRecipes(category?.toLowerCase() as RecipeFilters);

  return {
    props: { recipes, category },
  };
}

export default Recipes;
