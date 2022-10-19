import type { ReactElement } from "react";
import Navbar from "./Navbar";

type LayoutProps = ({
  children,
 }: {
  children: ReactElement
 }) => ReactElement

const Layout: LayoutProps = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout;