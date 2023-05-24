import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useRef } from "react";

import { wrap } from "@motionone/utils";

import "./Skills.css";

const skillsItems = [
  { img: "/skills/css-icon-removebg-preview.png", title: "css" },
  { img: "/skills/cypress-removebg-preview.png", title: "cypress" },
  { img: "/skills/framer-icon-removebg-preview.png", title: "framer" },
  { img: "/skills/js-removebg-preview.png", title: "Javascript" },
  { img: "/skills/jwt-removebg-preview.png", title: "jwt" },
  { img: "logo192.png", title: "React" },

  { img: "/skills/mongoDb-removebg-preview.png", title: "mongo DB" },
  { img: "next-icon.jpg", title: "Next Js" },
  { img: "/skills/node-removebg-preview.png", title: "Node js" },
  { img: "/skills/Puppeteer-removebg-preview.png", title: "Puppeteer" },
  { img: "/skills/redux-removebg-preview.png", title: "redux" },
  { img: "/skills/sass-removebg-preview.png", title: "sass" },
  { img: "typescript.png", title: "typescript" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="text-gradient">
        Some of the Languages and Libraries I use
      </h2>
      <div className="slide-container">
        <div className="skills-container" style={{}}>
          {skillsItems.map((skill) => (
            <div className="skill bg-gradient-dark" key={skill.title}>
              <img src={skill.img} alt={skill.title} />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="skills-container" style={{}}>
          {skillsItems.map((skill) => (
            <div className="skill bg-gradient-dark" key={skill.title}>
              <img src={skill.img} alt={skill.title} />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
