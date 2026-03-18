import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const TypingText = ({
  words = ["3D visuals", "user interfaces", "web applications"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1400,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    let timeout;
    const current = words[wordIndex % words.length];

    if (!isDeleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((w) => w + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <>
      <span>{text}</span>
      <span style={{ opacity: cursorVisible ? 1 : 0 }} className='text-[#915EFF]'>|</span>
    </>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-auto md:h-screen mx-auto min-h-[500px]`}>
      <div
        className={`absolute inset-0 top-[120px] md:top-[120px] top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Scott</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build&nbsp;
            <TypingText words={["business software solutions  ", "responsive user interfaces", "modern web applications"]} />
          </p>
        </div>
      </div>

      <div className='hidden md:block'>
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
