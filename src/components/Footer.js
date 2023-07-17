import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built with{" "}
          <span className="text-accent text-2xl px-1 dark:text-primaryDark">
            &#9825;{" "}
          </span>{" "}
          by&nbsp;
          <Link
            href="https://www.chriswarren.dev"
            target="_blank"
            className="underline underline-offset-2"
          >
            Chris Warren
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
