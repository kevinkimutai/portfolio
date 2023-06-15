import React from "react";
import Image from "../../assets/skills/JavaScript frameworks-amico.png";

import { AiOutlineFilePdf } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Banner.css";

const Banner = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <motion.div variants={container} className="banner">
      <div className="banner__title-container">
        <h1>
          Hello I'm <span className="text-gradient">Kevin Kimutai,</span>
          <br />
          <span className="text-gradient">Front-End</span> Developer
        </h1>
        <p className="title__summary">
          Front-end developer stack capable of blending the art of design with
          programming by leveraging the react ecosystem to deliver an immersive
          and engaging user experience through efficient website development,
          proactive feature optimization and relentless debugging
        </p>
        <motion.button
          whileTap={{ scale: 1.1 }}
          className="title__btn bg-gradient-dark"
        >
          <AiOutlineFilePdf className="btn-icon" />
          check out my CV
        </motion.button>
      </div>
      <div className="banner__hero-container">
        <img src={Image} alt="hero" />
      </div>
    </motion.div>
  );
};

export default Banner;
