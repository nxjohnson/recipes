import Link from "next/link";
import React, { FunctionComponent, ReactPortal } from "react";
import ReactDom from "react-dom";
import styles from "../styles/Menu.module.css"
import PageHeader from './layouts/PageHeader'

interface MenuProps {
  showMenu: boolean,
  toggleMenu: VoidFunction
}

const Menu = ({ showMenu, toggleMenu }: MenuProps): ReactPortal | null => {
  const categories: string[] = ['Meat', 'Pasta', 'Soups', 'Veggies', 'Bread', 'Desserts', 'View All'];
  if (!showMenu) {
    return null;
  }

  return ReactDom.createPortal(
    <div className={styles.menuPortal}>
      <PageHeader header="Contents">
        <div className={styles.categoryList}>
          <div className={styles.category}>
            <span>Search</span>
            <span>00</span>
          </div>
          <Link href={'/'} onClick={() => toggleMenu()}>
            <div className={styles.category}>
              <span>Home</span>
              <span>00</span>
            </div>
          </Link>
          {categories.map((category, index) => {
            return (
              <Link key={category} href={`/recipes`} onClick={() => toggleMenu()}>
                <div className={styles.category}>
                  <span>{category}</span>
                  <span>{'0' + (index + 1)}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </PageHeader>
    </div>, document.getElementById("menu-portal") as HTMLElement
  )
}

export default Menu