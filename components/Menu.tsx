import { FunctionComponent } from "react";
import ReactDom from "react-dom";
import styles from "../styles/Menu.module.css"

interface MenuProps {
  showMenu: boolean,
}

const Menu = ({ showMenu }: MenuProps) => {
  const categories: string[] = ['Meat', 'Pasta', 'Soups', 'Veggies', 'Bread', 'Desserts', 'View All'];
  if (!showMenu) {
    return;
  }

  return ReactDom.createPortal(
    <div className={styles.menuPortal}>
      <h1 className={styles.title}>Contents</h1>
      <div className={styles.categoryList}>
        <div className={styles.category}>
          <span>Search</span>
          <span>00</span>
        </div>
        {categories.map((category, index) => {
          return (
            <div key={category} className={styles.category}>
              <span>{category}</span>
              <span>{'0' + (index + 1)}</span>
            </div>
          )
        })}
      </div>
    </div>, document.getElementById("menu-portal") as HTMLElement
  )
}

export default Menu