import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isDesktop ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-black-200 rounded-full'>
              <div className='w-16 h-16'>
                <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
