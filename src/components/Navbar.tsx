import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

export const Navbar: React.FC = () => {
  // STATE FOR MENU
  const [menu, setMenu] = useState(false);

  // HANDLES TOGGLE. TRACKS PREVIOUS MENU STATE AND THEN RETURNS THE OPPOSITE OF WHATEVER THE PREV STATE WAS.
  const handleToggle = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <div className="fixed z-50 bg-black top-0 flex px-5 py-2 justify-between items-center w-full">
        {/* NAME / LOGO */}
        <div>
          <h1 className="font-bold text-gray-light">
            Made by
            <span className="animate-text ml-2 font-light text-2xl text-white hover:text-white hover:border-b-2 border-gray-light transition duration-300 ease-in-out">
              ravathedev
            </span>
          </h1>
        </div>

        {/* MOBILE MENU */}
        <div className="block md:hidden">
          {menu ? (
            <FaXmark onClick={handleToggle} className="size-6 text-white" />
          ) : (
            <HiMenuAlt4 onClick={handleToggle} className="size-6 text-white" />
          )}
        </div>

        {/* DESKTOP MENU  */}
        <ul className="hidden md:flex gap-2 items-center text-white h-full text-1xl">
          <li className="cursor-pointer text-gray-light transition duration-150 ease-in-out border-b-2 border-black hover:text-white hover:border-b-2 hover:border-gray-light">
            home
          </li>
          <li className="cursor-pointer text-gray-light transition duration-150 ease-in-out border-b-2 border-black hover:text-white hover:border-b-2 hover:border-gray-light">
            about
          </li>
          <li className="cursor-pointer text-gray-light transition duration-150 ease-in-out border-b-2 border-black hover:text-white hover:border-b-2 hover:border-gray-light">
            portfolio
          </li>
          <li className="cursor-pointer text-gray-light transition duration-150 ease-in-out border-b-2 border-black hover:text-white hover:border-b-2 hover:border-gray-light">
            contact
          </li>
        </ul>

        {/* CONTAINER ENDS */}
      </div>

      {/* MOBILE MENU  */}

      {/* container */}
      <div
        className={`fixed top-10 z-40 py-5 bg-gray w-full md:hidden transition duration-150 ease-in-out ${
          menu ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        {/* mobile menu items */}
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
