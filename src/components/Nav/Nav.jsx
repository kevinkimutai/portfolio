import React, { useState } from "react";

import {
  AiOutlineCode,
  AiOutlineFundProjectionScreen,
  AiOutlineTag,
  AiOutlineMenu,
} from "react-icons/ai";
import { GiArrowhead } from "react-icons/gi";

import { motion } from "framer-motion";

import "./Nav.css";

const navItems = [
  {
    icon: <AiOutlineCode className="nav__icon text-gradient" />,
    name: "Skills",
  },
  {
    icon: <AiOutlineFundProjectionScreen className="nav__icon text-gradient" />,
    name: "Projects",
  },
  {
    icon: <AiOutlineTag className="nav__icon text-gradient" />,
    name: "Socials",
  },
];

const Nav = () => {
  const [toggleNav, setToggleNav] = useState();

  const container = {
    hidden: { opacity: 0, scale: 0, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div
        variants={container}
        initial={"hidden"}
        animate={"visible"}
        className="nav"
      >
        {/* <img className="nav__logo" src={Image} alt="logo" /> */}
        <GiArrowhead className="portfolio-icon" />
        <motion.ul className="nav-list">
          {navItems.map(({ icon, name }) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              key={name}
              variants={item}
              className="nav__list--lg"
            >
              {icon}
              {name}
            </motion.li>
          ))}
          <div className="nav__sm">
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="nav__list--sm"
              onClick={() => {
                setToggleNav((prevState) => !prevState);
              }}
            >
              <AiOutlineMenu className="nav__icon text-gradient" />
              Menu
            </motion.li>
          </div>
        </motion.ul>
      </motion.div>

      {toggleNav && (
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          className="nav__sm-container"
        >
          {navItems.map(({ icon, name }) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              key={name}
              variants={item}
              className="nav__list--sm text-gradient"
            >
              {icon}
              {name}
            </motion.li>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Nav;
