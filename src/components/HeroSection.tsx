import rafa from "../assets/rafael.jpg";
import { ArrowComponent } from "./ArrowComponent";
import { TypingEffect } from "./TypingEffect";
import { Link } from "react-scroll"; // Import Link from react-scroll

export const HeroSection: React.FC = () => {
  return (
    <>
      {/* SECTION CONTAINER */}
      <div className="relative w-full md:h-[100vh] md:flex md:items-center md:justify-center shadow-sm bg-black">
        {/* CONTENT CONTAINER */}
        <div className="mx-auto w-[90%] max-w-[550px] pt-[7rem] md:pt-20 pb-40">
          {/* FLEX CONTAINER */}
          <div className="flex justify-between md:justify-around">
            {/* flex item 1, profile picture */}
            <div className="animate-shadow rounded-full overflow-hidden flex-1">
              <img
                src={rafa}
                className="w-full object-cover transition opacity-40 ease-in-out"
                alt=""
              />
            </div>

            {/* flex item 2, welcome & message */}
            <div className="flex items-center justify-center flex-1">
              <div className="pl-10">
                <div>
                  <h1 className="text-white text-xl text-left">
                    <TypingEffect
                      text={["Welcome"]}
                      startDelay={1500}
                      typeSpeed={100}
                    />
                  </h1>
                  <p className="text-gray-light font-bold">
                    <TypingEffect
                      text={["I am a web developer"]}
                      startDelay={2200}
                      typeSpeed={70}
                    />
                  </p>
                  <p className="text-gray-light text-sm">
                    <TypingEffect
                      text={["I build responsive and modern web experiences."]}
                      startDelay={5000}
                      typeSpeed={30}
                    />
                  </p>
                </div>
              </div>
            </div>

            {/* FLEX CONTAINER ENDS */}
          </div>
          {/* CONTENT CONTAINER ENDS */}
        </div>

        {/* SECTION CONTAINER ENDS */}
        <Link to="sections" smooth={true} duration={800}>
          <div className="hidden md:block absolute bottom-0 left-0 w-full pb-4">
            <ArrowComponent />
          </div>
        </Link>
      </div>
    </>
  );
};
