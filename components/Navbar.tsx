import { useState, FunctionComponent } from "react";
import Link from "next/link";
import {
  MdOutlineMenu,
  MdOutlineClose,
  MdOutlineShoppingBag,
  MdOutlinePostAdd,
  MdOutlineSearch,
} from "react-icons/md";
import Logo from "./ui/Logo";
import { useUser } from "@supabase/auth-helpers-react";
import SideMenu from "./SideMenu";

const Navbar: FunctionComponent = () => {
  const user = useUser();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
    return;
  };

  const closeMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    }
    return;
  };

  const menuIcon = showMenu ? (
    <MdOutlineClose
      className="self-center text-3xl cursor-pointer"
      onClick={toggleMenu}
    />
  ) : (
    <MdOutlineMenu
      className="self-center text-3xl cursor-pointer"
      onClick={toggleMenu}
    />
  );

  return (
    <nav>
      <div className="fixed z-40 w-full h-16 flex justify-between items-center px-5 bg-white border-b-2 border-neutral-200">
        <div className="flex content-center gap-2">
          {menuIcon}
          <Link href={"/"} onClick={closeMenu}>
            <Logo />
          </Link>
        </div>
        <div className="flex content-center gap-2">
          <MdOutlineSearch
            className="text-3xl cursor-pointer"
            onClick={closeMenu}
          />
          {user && (
            <Link href={"/add-recipe"} onClick={closeMenu}>
              <MdOutlinePostAdd className="text-3xl cursor-pointer" />
            </Link>
          )}
          <MdOutlineShoppingBag
            className="text-3xl cursor-pointer"
            onClick={closeMenu}
          />
        </div>
      </div>
      <SideMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
