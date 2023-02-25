import CategoryTag from "./ui/CategoryTag";
import RecipeDetails from "./RecipeDetails";

interface Props {
  source: {
    sourceName: string;
    sourceUrl: string;
  };
  category: string;
  activeTime: number;
  totalTime: number;
  numberOfServings: number;
}

const RecipeSubHeading = ({
  source,
  category,
  activeTime,
  totalTime,
  numberOfServings,
}: Props) => {
  const { sourceName, sourceUrl } = source;

  return (
    <>
      <div className="flex justify-center gap-2 md:justify-start">
        <div className="flex content-center">
          <div className="w-8 h-0.5 self-center bg-neutral-200 lg:w-12" />
        </div>
        <p className="font-subHeading text-2xl lg:text-4xl">recipe</p>
        <div className="flex content-center md:hidden">
          <div className="w-8 h-0.5 self-center bg-neutral-200" />
        </div>
      </div>
      {sourceUrl ? (
        <a href={sourceUrl} target="_blank" rel="noreferrer" className="w-fit">
          <p className="inline text-sm pb-1 border-b-2 border-dotted border-neutral-200 lg:text-base">{`By ${sourceName}`}</p>
        </a>
      ) : (
        <p className="text-sm lg:text-base">{`By ${sourceName}`}</p>
      )}
      <CategoryTag category={category} />
      <RecipeDetails
        activeTime={activeTime}
        totalTime={totalTime}
        numberOfServings={numberOfServings}
      />
    </>
  );
};

export default RecipeSubHeading;
