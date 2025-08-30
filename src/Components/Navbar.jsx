import React from "react";
import pic from "../Image/abir-01.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <section className="bg-gray-600 py-3 ">
        <div className="container w-10/12 mx-auto">
          <motion.nav
            className="flex items-center justify-between"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="logo">
              <h1 className="text-2xl font-black text-white">
                Abir <span className="text-red-500">Ahmed</span>
              </h1>
            </div>
            <div className="ul flex items-center">
              <ul className="md:flex hidden gap-8 px-12">
                <li
                  onClick={() => scrollToSection("Home")}
                  className="font-semibold text-white hover:text-red-500 focus:text-red-500 cursor-pointer duration-150"
                >
                  Home
                </li>
                <li
                  onClick={() => scrollToSection("About")}
                  className="font-semibold text-white hover:text-red-500 focus:text-red-500 cursor-pointer duration-150"
                >
                  About Me
                </li>
                <li
                  onClick={() => scrollToSection("Skill")}
                  className="font-semibold text-white hover:text-red-500 focus:text-red-500 cursor-pointer duration-150"
                >
                  Skill
                </li>
                <li
                  onClick={() => scrollToSection("Rating")}
                  className="font-semibold text-white hover:text-red-500 focus:text-red-500 cursor-pointer duration-150"
                >
                  Rating Mine
                </li>
                <li
                  onClick={() => scrollToSection("Contact")}
                  className="font-semibold text-white hover:text-red-500 focus:text-red-500 cursor-pointer duration-150"
                >
                  Contact US
                </li>
              </ul>
              <img
                className="md:w-[4vw] w-[7vw] mr-7 md:mr-0"
                src={pic}
                alt=""
              />
              <GiHamburgerMenu className="md:hidden text-white" />
            </div>
          </motion.nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
