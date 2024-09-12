import rafa from "../assets/rafael.jpg";
import { TypingEffect } from "./TypingEffect";

export const HeroSection: React.FC = () => {
  return (
    <>
      <div className="w-full shadow-sm bg-black">
        <div className="mx-auto w-[90%] max-w-[800px] pt-20 pb-40">
          <div className="flex justify-between md:justify-around">
            <div className="pt-5 animate-shadow rounded-full overflow-hidden flex-1">
              <img
                src={rafa}
                className="w-full object-cover transition opacity-40 ease-in-out"
                alt=""
              />
            </div>

            <div className="grow flex items-center justify-center flex-1">
              <div className="mx-[20px] md:mx-[50px]">
                <h1 className="text-white font-bold text-xl">
                  <TypingEffect
                    text={["Welcome"]}
                    startDelay={1500}
                    typeSpeed={80}
                  />
                </h1>
                <p className="text-gray-light">
                  <TypingEffect
                    text={["I'm just a front-end developer"]}
                    startDelay={2000}
                    typeSpeed={100}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
