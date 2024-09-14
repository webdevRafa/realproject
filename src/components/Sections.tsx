import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { Element } from "react-scroll";

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";

export const Sections: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleToggle = () => {
    setSelected((prev) => !prev);
  };

  const handleCombinedClick = (index: number) => {
    handleToggle();
    setSelectedIndex(index);
  };

  const sections = [
    {
      title: "about",
      description: "get to know me",
      content: (
        <div className="w-full appear transition-all duration-200 ease-in-out">
          <p className="text-gray-light">
            Hi. My name is Rafael. I am based out of San Antonio, Texas.
          </p>

          <IoIosArrowDropleftCircle
            onClick={() => setSelected(false)}
            className="cursor-pointer transition-all duration-150 ease-in-out hover:scale-125 mx-auto mt-5 size-10 text-bright-green"
          />
        </div>
      ),
      icon: (
        <IoIosContact className="text-bright-green size-8 mt-2 mx-auto cursor-pointer hover:text-bright-green hover:scale-125 transition-all duration-200" />
      ),
    },
    {
      title: "projects",
      description: "view my work",
      content: (
        <div className="w-full appear transition-all duration-200 ease-in-out">
          <p className="text-gray-light">
            This is actually my first real project, but I will be adding content
            to this section very soon.
          </p>
          <IoIosArrowDropleftCircle
            onClick={() => setSelected(false)}
            className="cursor-pointer transition-all duration-150 ease-in-out hover:scale-125 mx-auto mt-5 size-10 text-bright-green"
          />
        </div>
      ),
      icon: (
        <GoProjectRoadmap className="text-bright-green size-8 mt-2 mx-auto cursor-pointer hover:text-bright-green hover:scale-125 transition-all duration-200" />
      ),
    },
    { title: "contact", description: "reach out to me" },
  ];

  return (
    <>
      <Element name="sections">
        <div className="relative w-full bg-dark-black md:h-[100vh] flex items-center justify-center">
          {!selected ? (
            <div className="flex flex-col md:flex-row gap-5 w-[90%]  max-w-[1200px] transition-all duration-150 ease-in-out appear">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="flex-1 hover:flex-[2] hover:scale-110  z-30 hover:z-40 transition-all duration-200 ease-in-out w-full bg-dark-black  hover:bg-gray "
                >
                  <div className="h-[200px] flex items-center justify-center">
                    <div>
                      <h1 className="text-center text-white text-3xl">
                        {section.title}
                      </h1>
                      <p className="text-gray-light">{section.description}</p>
                      <div onClick={() => handleCombinedClick(index)}>
                        {section.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-[1200px]">
              {selectedIndex !== null && sections[selectedIndex].content}
            </div>
          )}
        </div>
      </Element>
    </>
  );
};
