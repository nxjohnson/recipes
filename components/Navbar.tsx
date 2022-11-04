import { useState, FunctionComponent } from "react";
import Link from "next/link";
import styles from '../styles/Navbar.module.css'
import { MdOutlineMenu, MdOutlineShoppingBag, MdOutlinePostAdd } from "react-icons/md";
import Menu from "./Menu";

const Navbar: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navIcons}>
          <MdOutlineMenu className={styles.hamburgerMenu} onClick={toggleMenu} />
          <Link href={'/add-recipe'}>
            <MdOutlinePostAdd className={styles.shoppingBag} />
          </Link>
          <MdOutlineShoppingBag className={styles.shoppingBag} />
        </div>
      </nav>
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  )
}

export default Navbar