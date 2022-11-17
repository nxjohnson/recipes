import { ReactElement, ReactNode } from "react";

interface Props {
  header: string;
  children: ReactElement;
}

const PageHeader = ({ header, children }: Props): JSX.Element => {
  return (
    <div className="flex w-full">
      <h1 className="w-1/2 font-heading text-8xl pb-16">{header}</h1>
      <div className="w-1/2">{children}</div>
    </div>
  );
};

export default PageHeader;
