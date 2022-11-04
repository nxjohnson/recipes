import type { ReactElement } from "react";
import Navbar from "../Navbar";

type LayoutProps = ({
  children,
 }: {
  children: ReactElement
 }) => ReactElement

const RootLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default RootLayout;