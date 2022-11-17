import Link from "next/link";
import React, { FunctionComponent, ReactPortal } from "react";
import ReactDom from "react-dom";
import PageHeader from "./layouts/PageHeader";

interface MenuProps {
  showMenu: boolean;
  toggleMenu: VoidFunction;
}

const Menu = ({ showMenu, toggleMenu }: MenuProps): ReactPortal | null => {
  const categories: string[] = [
    "Meat",
    "Pasta",
    "Soups",
    "Veggies",
    "Bread",
    "Desserts",
    "View All",
  ];
  if (!showMenu) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-20 p-16 flex bg-white">
      <PageHeader header="Contents">
        <div className="w-full justify-between">
          <div className="flex justify-between font-subHeading text-xl font-medium mb-8 border-b-4 border-neutral-200">
            <span>Search</span>
            <span>00</span>
          </div>
          <Link href={"/"} onClick={() => toggleMenu()}>
            <div className="flex justify-between font-subHeading text-xl font-medium mb-8 border-b-4 border-neutral-200">
              <span>Home</span>
              <span>00</span>
            </div>
          </Link>
          {categories.map((category, index) => {
            return (
              <Link
                key={category}
                href={`/recipes`}
                onClick={() => toggleMenu()}
              >
                <div className="flex justify-between font-subHeading text-xl font-medium mb-8 border-b-4 border-neutral-200">
                  <span>{category}</span>
                  <span>{"0" + (index + 1)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </PageHeader>
    </div>,
    document.getElementById("menu-portal") as HTMLElement
  );
};

export default Menu;
