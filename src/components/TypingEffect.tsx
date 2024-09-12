import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypingEffectProps {
  text: string[];
  startDelay?: number;
  typeSpeed?: number;
}
export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typeSpeed,
  startDelay = 0,
}) => {
  const el = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: text,
      typeSpeed: typeSpeed,
      backSpeed: 25,
      loop: false,
      showCursor: false,
      startDelay: startDelay,
    });

    // cleanup typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <div ref={el}></div>;
};
