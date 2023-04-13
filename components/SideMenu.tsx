import Link from "next/link";
import { useUser } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface Props {
  showMenu: boolean;
  toggleMenu: () => void;
}

const SideMenu = ({ showMenu, toggleMenu }: Props) => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const showMenuStyles = showMenu ? "h-full overflow-hidden" : "";

  if (!showMenu) {
    return <></>;
  }

  return (
    <>
      <div
        className={`${showMenuStyles} fixed z-40 top-16 bottom-0 left-0 h-[calc(100vh_-_4rem)] w-full md:w-1/3 xl:w-1/4 px-6 py-8 md:border-r-2 border-neutral-200 bg-white`}
      >
        <div className="flex flex-col gap-8 font-subHeading text-xl font-medium">
          <Link
            href={"/"}
            className="border-b-2 border-neutral-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href={"/recipes"}
            className="border-b-2 border-neutral-200"
            onClick={toggleMenu}
          >
            Recipes
          </Link>
          {user && (
            <Link
              href={"/add-recipe"}
              className="border-b-2 border-neutral-200"
              onClick={toggleMenu}
            >
              Add Recipe
            </Link>
          )}
          <Link
            href={"/shopping-list"}
            className="border-b-2 border-neutral-200"
            onClick={toggleMenu}
          >
            Shopping List
          </Link>
          {user ? (
            <span
              className="border-b-2 border-neutral-200"
              onClick={() => {
                supabaseClient.auth.signOut();
                toggleMenu();
              }}
            >
              Sign Out
            </span>
          ) : (
            <Link
              href={"/signin"}
              className="border-b-2 border-neutral-200"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-30"
        onClick={toggleMenu}
      />
    </>
  );
};

export default SideMenu;
