import { useState, FunctionComponent } from "react";
import Link from "next/link";
import {
  MdOutlineMenu,
  MdOutlineShoppingBag,
  MdOutlinePostAdd,
} from "react-icons/md";
import Menu from "./Menu";

const Navbar: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <>
      <nav className="fixed h-screen w-20 right-0 flex justify-center items-center border-l-2 border-neutral-200">
        <div className="fixed flex flex-col top-4 right-5 gap-4">
          <MdOutlineMenu
            className="text-4xl cursor-pointer"
            onClick={toggleMenu}
          />
          <Link href={"/add-recipe"}>
            <MdOutlinePostAdd className="text-4xl cursor-pointer" />
          </Link>
          <MdOutlineShoppingBag className="text-4xl cursor-pointer" />
        </div>
      </nav>
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
