import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

export const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <div className="sticky z-50 bg-black top-0 flex px-5 py-2 justify-between items-center h-full">
        {/* NAME / LOGO */}

        <div>
          <h1 className="font-bold text-gray-light">
            Made by
            <span className="ml-2 font-light text-2xl text-white hover:text-white hover:border-b-2 border-green transition duration-300 ease-in-out">
              ravathedev
            </span>
          </h1>
        </div>

        {/* MENU ITEMS */}

        {/* MOBILE MENU */}
        <div className="block md:hidden">
          <HiMenuAlt4 onClick={handleToggle} className="size-8 text-green" />
        </div>

        {/* DESKTOP MENU  */}
        <ul className="hidden md:flex gap-2 items-center text-white h-full text-1xl">
          <li className="cursor-pointer text-gray-light transition duration-200 ease-in-out border-b-4 border-black hover:text-white hover:border-b-4 hover:border-green">
            home
          </li>
          <li className="cursor-pointer text-gray-light transition duration-200 ease-in-out border-b-4 border-black hover:text-white hover:border-b-4 hover:border-green">
            about
          </li>
          <li className="cursor-pointer text-gray-light transition duration-200 ease-in-out border-b-4 border-black hover:text-white hover:border-b-4 hover:border-green">
            portfolio
          </li>
          <li className="cursor-pointer text-gray-light transition duration-200 ease-in-out border-b-4 border-black hover:text-white hover:border-b-4 hover:border-green">
            contact
          </li>
        </ul>

        {/* CONTAINER ENDS */}
      </div>

      <div
        className={`top-0 py-5 bg-gray w-full md:hidden ${
          menu ? "relative" : "hidden"
        }`}
      >
        <ul className="text-center text-white">
          <li className="my-1.5">home</li>
          <li className="my-1.5">about</li>
          <li className="my-1.5">portfolio</li>
          <li className="my-1.5">contact</li>
        </ul>
      </div>
    </>
  );
};
