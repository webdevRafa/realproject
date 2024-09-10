import rafa from "../assets/rafael.jpg";

export const HeroSection: React.FC = () => {
  return (
    <>
      <div className="w-full translate-y-[30px]">
        <div className="mt-10 mx-auto w-[90%] max-w-[800px] pt-20 pb-40">
          <div className="flex justify-between md:justify-around">
            <div className="w-64 bg-gray pt-5 animate-shadow rounded-full overflow-hidden">
              <img
                src={rafa}
                className="w-full object-cover transition opacity-40 ease-in-out"
                alt=""
              />
            </div>

            <div className="grow flex items-center justify-center">
              <div className="mx-[20px] md:mx-[50px]">
                <h1 className="text-white md:text-2xl animate-text">
                  WELCOME TO MY PAGE
                </h1>
                <p className="text-gray-light">
                  My name is Rafael and I am a front-end web developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
