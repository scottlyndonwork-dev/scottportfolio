import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description, icon }) => (
  <Tilt className='xs:w-[250px] w-full' tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card dark:shadow-card'
    >
      <div
        className='bg-gray-50 dark:bg-tertiary rounded-[20px] py-5 px-4 min-h-[320px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-gray-900 dark:text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-gray-600 dark:text-secondary text-[14px] text-center leading-[22px] mt-2'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-700 dark:text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Cum Laude BSIT graduate with 5+ years of remote freelance experience as a Virtual Assistant and Graphic Designer. Skilled in managing administrative workflows, calendars, and client communications, alongside producing 1,000+ brand designs across social media, web, and print. Adds a technical edge most VAs don't have — hands-on experience supporting a regional government finance system and IT operations across multiple business locations, making me equally comfortable managing your inbox, your brand, or your basic tech needs. Reliable, self-managed, and experienced working directly with clients with minimal oversight.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
