import { MouseEventHandler } from "react";
import { MdOutlineClear } from "react-icons/md";

interface Props {
  content: string;
  index: number;
  removeCard: any;
}

const DirectionCard = ({ content, index, removeCard }: Props) => {
  const currentStep: string = `Step ${index + 1}`;

  return (
    <li className="p-6 bg-neutral-100">
      <div className="flex justify-between items-center">
        <p className="block text-lg font-medium">{currentStep}</p>
        <MdOutlineClear
          className="shrink-0 text-2xl cursor-pointer"
          onClick={() => removeCard(index)}
        />
      </div>
      <p>{content}</p>
    </li>
  );
};

export default DirectionCard;
