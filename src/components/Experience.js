import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="CW Technologies"
            companyLink="https://cwtechnologies.co"
            time="2022 - Present"
            address="Remote"
            work="Worked with multiple clients to build technology solutions that worked. Worked on assessing the risks involved & develop risk management strategies that would help them evolve & grow."
          />
          <Details
            position="Software Engineer"
            company="Chris Warren Development"
            companyLink="https://www.chriswarren.dev/"
            time="2007 - 2022"
            address="Remote"
            work="Worked with many clients as a freelance developer & in that time used HTML, CSS, JavaScript, TypeScript, React, React Native, & a host of other technologies to help keep costs down for my clients."
          />
          <Details
            position="React Native Developer"
            company="SwagCheck, Inc."
            companyLink="https://swagcheck.io/"
            time="2021 - 2022"
            address="Remote"
            work="Used React Native to build the app, instrumental in developing the ability to add a signature to newly minted NFTs, Updated the code base from React Native 0.64 to React Native 0.67, Helped install a payment gateway for people to purchase an NFT after it was minted."
          />
          <Details
            position="Full-Stack Developer"
            company="Avaaz Media, Inc."
            companyLink="https://avaazmedia.com/"
            time="2020 - 2021"
            address="Remote"
            work="Started the conversion of the Brown Geeks website from WordPress to React, reviewed code for The Brown Geeks website, corrected coding issues, & debugged problems
            "
          />
          <Details
            position="Director of Technology"
            company="The Five Star Institute"
            companyLink="https://thefivestar.com/"
            time="April 2013 - December 2013"
            address="Dallas, TX"
            work="Monitored the construction, maintenance, and security of the network, increased the profitability of the company by making systems and procedures more efficient, and reducing waste spending resulting in an estimated $3 million increase, raised membership in our realtor community from 1,000 to 1,600 from marketing, and saw a 25% increase in eLearning platform use."
          />
          <Details
            position="PC Repair Technician"
            company="The Five Star Institute"
            companyLink="https://thefivestar.com/"
            time="March 2013 - April 2013"
            address="Dallas, TX"
            work="Repaired Laptops for use by employees out in the field, restored information thought to be lost on employee computers, installed anti-virus software across the board to users in an effort to combat malware & virus attacks on systems being utilized,
            Was responsible for the conversion from PC to Apple products."
          />
          <Details
            position="IT2"
            company="The United States Navy"
            companyLink="https://www.navy.com/"
            time="2000 - 2006"
            address="San Dieg, CA"
            work="While an active member of the United States Navy I served with distinction."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
