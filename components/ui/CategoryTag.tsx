interface Props {
  category: string;
}

const CategoryTag = ({ category }: Props): JSX.Element => {
  return (
    <div>
      <span className="px-4 py-1 bg-neutral-200 rounded-3xl">{category}</span>
    </div>
  );
};

export default CategoryTag;
