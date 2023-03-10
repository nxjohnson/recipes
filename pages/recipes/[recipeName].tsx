import { InferGetServerSidePropsType } from "next";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipeDirections from "../../components/RecipeDirections";
import NutritionalInfo from "../../components/NutritionalInfo";
import Header from "../../components/layouts/PageHeader";
import RecipeSubHeading from "../../components/RecipeSubHeading";
import { getOneRecipe } from "../../db/recipe";
import { ObjectId } from "mongodb";

interface ServerSideProps {
  query: {
    _id: ObjectId;
  };
}

const Recipe = ({
  recipe,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    activeTime,
    attributes,
    created,
    image,
    ingredients,
    numberOfServings,
    nutrition,
    recipeDirections,
    recipeName,
    source,
    totalTime,
  } = recipe;

  return (
    <div className="w-full flex flex-col pb-12 gap-12">
      <Header heading={recipeName} image={image}>
        <RecipeSubHeading
          source={source}
          category={attributes.category}
          activeTime={activeTime}
          totalTime={totalTime}
          numberOfServings={numberOfServings}
        />
      </Header>
      <div className="flex justify-center px-8 w-full lg:px-24">
        <div className="flex flex-col w-full gap-12 md:flex-row md:gap-24 lg:w-3/4">
          <RecipeIngredients ingredients={ingredients} />
          <RecipeDirections recipeDirections={recipeDirections} />
        </div>
      </div>
      {/* <NutritionalInfo nutrition={nutrition} /> */}
    </div>
  );
};

export async function getServerSideProps({ query }: ServerSideProps) {
  const recipeId = query._id;

  const recipe = await getOneRecipe(recipeId);
  const data = JSON.parse(JSON.stringify(recipe));

  return {
    props: { recipe: data },
  };
}

export default Recipe;
