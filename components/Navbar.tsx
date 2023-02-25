import { useState, FunctionComponent } from "react";
import Link from "next/link";
import {
  MdOutlineMenu,
  MdOutlineClose,
  MdOutlineShoppingBag,
  MdOutlinePostAdd,
  MdOutlineSearch
} from "react-icons/md";
import Logo from "./ui/Logo";

const Navbar: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    const body = document.body;

    if (showMenu) {
      setShowMenu(false);
      body.classList.remove('h-full')
      body.classList.remove('overflow-hidden')
    }

    if (!showMenu) {
      setShowMenu(true);
      body.classList.add('h-full')
      body.classList.add('overflow-hidden')
    }
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const closeMenu = () => {
    const body = document.body;

    if (showMenu) {
      setShowMenu(false);
      body.classList.remove('h-full')
      body.classList.remove('overflow-hidden')
    }
  }

  return (
    <>
      <nav className="fixed z-40 w-full h-16 flex justify-between items-center px-5 bg-white border-b-2 border-neutral-200">
        <div className="flex content-center gap-2">
          {showMenu ?
            <MdOutlineClose
              className="self-center text-3xl cursor-pointer"
              onClick={toggleMenu}
            /> :
            <MdOutlineMenu
              className="self-center text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          }
          <Link href={"/"} onClick={closeMenu}>
            <Logo />
          </Link>
        </div>
        <div className="flex content-center gap-2">
          <MdOutlineSearch className="text-3xl cursor-pointer" onClick={closeMenu} />
          <Link href={"/add-recipe"} onClick={closeMenu}>
            <MdOutlinePostAdd className="text-3xl cursor-pointer" />
          </Link>
          <MdOutlineShoppingBag className="text-3xl cursor-pointer" onClick={closeMenu} />
        </div>
      </nav>
      {showMenu ? (
        <>
          <div className="fixed z-40 top-16 bottom-0 left-0 h-[calc(100vh_-_4rem)] w-full md:w-1/3 xl:w-1/4 px-6 py-8 md:border-r-2 border-neutral-200 bg-white">
            <div className="flex flex-col gap-8 font-subHeading text-xl font-medium">
              <Link href={"/"} className="border-b-2 border-neutral-200" onClick={toggleMenu}>
                Home
              </Link>
              <Link href={"/recipes"} className="border-b-2 border-neutral-200" onClick={toggleMenu}>
                Recipes
              </Link>
              <Link href={"/add-recipe"} className="border-b-2 border-neutral-200" onClick={toggleMenu}>
                Add Recipe
              </Link>
              <Link href={"/shopping-list"} className="border-b-2 border-neutral-200" onClick={toggleMenu}>
                Shopping List
              </Link>
              <Link href={"/login"} className="border-b-2 border-neutral-200" onClick={toggleMenu}>
                Login
              </Link>
            </div>
          </div>
          <div
            className="fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-30"
            onClick={toggleMenu}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
