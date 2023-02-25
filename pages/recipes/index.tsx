import RecipeCard from "../../components/RecipeCard";
import { Recipe } from "../../types/RecipeTypes";

import clientPromise from "../../lib/mongodb";
import { InferGetServerSidePropsType } from "next";

const Recipes = ({
  recipes,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {

  return (
    <div className="flex flex-col w-full gap-8 px-8 py-8 lg:px-24">
      <div className="flex flex-col w-full pb-8 border-b-2 border-neutral-200 md:flex-row">
        <h1 className="font-heading text-4xl md:w-1/2 lg:text-7xl">Recipes</h1>
        <div>ToDo: Filters</div>
      </div>
      {recipes.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipes.map((recipe: Recipe) => {
            return (
              <div
                className="border border-t-0 border-neutral-300 hover:shadow-lg"
                key={recipe._id}
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

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("recipesDb");
  const recipes = await db.collection("recipes").find({}).toArray();

  const data = JSON.parse(JSON.stringify(recipes));

  return {
    props: { recipes: data },
  };
}

export default Recipes;
