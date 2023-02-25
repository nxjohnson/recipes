import formatTime from "./utilies/formatTime";

interface Props {
  activeTime: number;
  totalTime: number;
  numberOfServings: number;
}

const RecipeDetails = ({
  activeTime,
  totalTime,
  numberOfServings,
}: Props): JSX.Element => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4 pt-6 border-t-2 border-neutral-200 md:grid-cols-1 md:gap-4">
      <div>
        <p className="font-bold text-sm lg:text-base">Prep Time</p>
        <data className="text-sm lg:text-base">{formatTime(activeTime)}</data>
      </div>
      <div>
        <p className="font-bold text-sm lg:text-base">Total Time</p>
        <data className="text-sm">{formatTime(totalTime)}</data>
      </div>
      <div>
        <p className="font-bold text-sm lg:text-base">Yield</p>
        <data className="text-sm lg:text-base">{`Serves ${numberOfServings}`}</data>
      </div>
    </div>
  );
};

export default RecipeDetails;
