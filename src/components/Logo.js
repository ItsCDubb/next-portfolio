import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-full w-16 h-16  bg-dark text-white dark:border-2 dark:border-solid dark:border-light
    text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#1b1b1b",
            "#0ba376",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "#0ba376",
            "#1b1b1b",
          ],
          transition: { duration: 3, repeat: Infinity },
        }}
      >
        CW
      </MotionLink>
    </div>
  );
};

export default Logo;
