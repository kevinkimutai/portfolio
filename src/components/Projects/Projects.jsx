import React from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./Projects.css";
import { SKILLITEMS } from "../../constants/constants";

const projectItems = [
  {
    techUsed: [SKILLITEMS[0].img],
    cover:
      "https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=886&q=80",
    name: "Netflix Clone",
    sumary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    githubLink: "https://github.com/kevinkimutai/netflix-react-clone",
    productionLink: "https://my-netflix-react-clone.netlify.app/",
  },
  {
    techUsed: [SKILLITEMS[0].img],
    cover:
      "https://images.unsplash.com/photo-1471248026681-35a45d5530a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    name: "SokoBora E-commerce frontend",
    sumary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    githubLink: "https://github.com/kevinkimutai/sokobora-food-order-app",
    productionLink: "https://sokobora-food-app.netlify.app/",
  },
  {
    techUsed: [SKILLITEMS[0].img],
    cover:
      " https://images.unsplash.com/photo-1508974823332-931ff03d2d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    name: "Giftr",
    sumary:
      "Giftr is a gifting e commerce site that allows users to find the perfect and unique giftto gift theirloved ones on any occassion. Dont know what your looking for,make use of our chatbot to find the perfect gift for your loved ones.We also offer delivery services,the gifts are delivered fully wrapped in either a basket or gift-box.Pay on delivery or through our app",
    githubLink:
      "https://github.com/kevinkimutai/e-commrce-fullstack-react-node",
    productionLink: "https://endearing-eclair-dd6f03.netlify.app/ ",
  },

  {
    techUsed: [SKILLITEMS[0].img],
    cover: "https://cdn.mos.cms.futurecdn.net/xz4NVQhHaHShErxar7YLn.jpg",
    name: "Tesla Clone",
    sumary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    githubLink: "https://github.com/kevinkimutai/tesla-website-clone",
    productionLink: "https://my-tesla-website-clone.netlify.app/",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <motion.section className="projects-section bg-gradient-dark">
      <motion.div>
        <h1>Projects</h1>
        <div className="projects-container">
          {projectItems.map((project) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ once: true }}
              key={project.name}
              className="project"
              onClick={() => {
                window.location.replace(project.productionLink);
              }}
            >
              <img src={project.cover} alt={project.name} />

              <div className="project__details-container">
                <h2 className="text-gradient">{project.name}</h2>
                <p className="text-gradient">{project.sumary}</p>
                <button
                  className="bg-gradient-dark"
                  onClick={() => {
                    window.location.replace(project.githubLink);
                  }}
                >
                  <span className="text-gradient-orange"> Github</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
