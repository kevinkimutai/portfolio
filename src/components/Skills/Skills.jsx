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
import { SKILLITEMS } from "../../constants/constants";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="text-gradient">
        Some of the Languages and Libraries I use
      </h2>
      <div className="slide-container">
        <div className="skills-container" style={{}}>
          {SKILLITEMS.map((skill) => (
            <div className="skill bg-gradient-dark" key={skill.title}>
              <img src={skill.img} alt={skill.title} />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <div className="skills-container" style={{}}>
          {SKILLITEMS.map((skill) => (
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
