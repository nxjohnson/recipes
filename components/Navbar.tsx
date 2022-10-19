import { useState, FunctionComponent } from "react";
import styles from '../styles/Navbar.module.css'
import Menu from "./Menu";

const Navbar: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  const openMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navIcons}>
          <span className={`material-symbols-outlined ${styles.hamburgerMenu}`} onClick={openMenu}>menu</span>
          <span className={`material-symbols-outlined ${styles.shoppingBag}`}>shopping_bag</span>
        </div>
      </nav>
      <Menu showMenu={showMenu} />
    </>
  )
}

export default Navbar