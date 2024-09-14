import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export const ArrowComponent: React.FC = () => {
  // state to track whether the arrow should be visible
  const [isVisible, setIsVisible] = useState(false);

  // useEffect to handle the delay and toggling visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000); // 5000ms delay

    // cleanup the timeout when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full ${isVisible ? "block" : "hidden"}`}>
      <FaAngleDoubleDown className="cursor-pointer mx-auto size-11 text-white animate-bounce animate-color" />
    </div>
  );
};
