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
      <main className="w-[calc(100%_-_5rem)] p-16">{children}</main>
    </>
  )
}

export default RootLayout;