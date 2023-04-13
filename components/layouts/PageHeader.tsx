import { ReactElement } from "react";
import Image from "next/image";

interface Props {
  heading: string;
  image?: string;
  children?: ReactElement | null;
}

const Header = ({ heading, children = null, image }: Props): JSX.Element => {
  return (
    <div className="flex flex-col w-full md:flex-row md:min-h-[calc(100vh_-_4rem)]">
      <div className="px-16 py-8 md:border-b-2 md:border-neutral-200 md:w-1/2 lg:px-24">
        <div className="flex flex-col content-center gap-4 text-center md:h-full md:justify-center md:text-left">
          <h1 className="font-heading text-4xl lg:text-7xl">{heading}</h1>
          {children}
        </div>
      </div>
      <div className="relative w-full aspect-square md:w-1/2 md:my-0">
        <Image
          className="object-cover"
          src={image}
          alt={heading}
          fill={true}
          priority
        />
      </div>
    </div>
  );
};

export default Header;
