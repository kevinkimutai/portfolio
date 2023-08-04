import React from "react";

import { motion } from "framer-motion";

import "./Projects.css";
import { SKILLITEMS } from "../../constants/constants";

const projectItems = [
  {
    techUsed: [SKILLITEMS[6].img, [SKILLITEMS[7].img]],
    cover:
      "https://www.comingsoon.net/wp-content/uploads/sites/3/2019/04/luciferheader.jpg",
    name: "Netflix Clone",
    sumary:
      "The Netflix clone project is a web application that replicates the basic functionalities of Netflix. It includes user authentication for secure access and integrates the TMDB API to retrieve and display movie and TV show information. Users can browse, search, and stream content similar to the original Netflix platform.",
    githubLink: "https://github.com/kevinkimutai/netflix-react-clone",
    productionLink: "https://my-netflix-react-clone.netlify.app/",
  },
  {
    techUsed: [SKILLITEMS[6].img, [SKILLITEMS[7].img], [SKILLITEMS[5].img]],
    cover:
      "https://img.freepik.com/premium-vector/food-drink-old-school-vintage-ribbon-banner-with-text-food-drink-black-white-chalk-graphic-chalkboard-poster-menu-bar-pub-restaurant-cafe-food-court_136321-1353.jpg",
    name: "SokoBora E-commerce frontend",
    sumary:
      "The food menu website project is a web application that allows users to explore a wide variety of food items and their descriptions. It offers a user-friendly interface for browsing different categories, searching for specific dishes, and viewing detailed information about each item",
    githubLink: "https://github.com/kevinkimutai/sokobora-food-order-app",
    productionLink: "https://sokobora-food-app.netlify.app/",
  },
  {
    techUsed: [
      SKILLITEMS[6].img,
      SKILLITEMS[0].img,
      SKILLITEMS[2].img,
      SKILLITEMS[5].img,
      SKILLITEMS[4].img,
      SKILLITEMS[8].img,
    ],
    cover:
      " https://hbr.org/resources/images/article_assets/2015/06/JUN15_09_pinterest.jpg",
    name: "Giftr",
    sumary:
      "Giftr is a gifting e commerce site that allows users to find the perfect and unique giftto gift theirloved ones on any occassion. Dont know what your looking for,make use of our chatbot to find the perfect gift for your loved ones.We also offer delivery services,the gifts are delivered fully wrapped in either a basket or gift-box.Pay on delivery or through our app",
    githubLink:
      "https://github.com/kevinkimutai/e-commrce-fullstack-react-node",
    productionLink: "https://endearing-eclair-dd6f03.netlify.app/ ",
  },

  {
    techUsed: [SKILLITEMS[1].img, SKILLITEMS[4].img],
    cover:
      "https://images.unsplash.com/photo-1585503418537-88331351ad99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    name: "Car Hire",
    sumary:
      "Discover the freedom of the open road with our wide selection of rental cars. Whether you're planning a road trip, business travel, or simply need a reliable ride, we've got you covered. Choose from a diverse fleet of vehicles and enjoy flexible rental options that suit your needs. Experience convenience, affordability, and quality service with our car hire platform. Book your car today and start your adventure!",
    githubLink: "https://github.com/kevinkimutai/car-rental-frontend",
    productionLink: "https://car-rental-frontend-iota.vercel.app/",
  },
];

const Projects = () => {
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
            >
              <img src={project.cover} alt={project.name} />

              <div className="project__details-container">
                <h2 className="text-gradient">{project.name}</h2>
                <p className="text-gradient">{project.sumary}</p>
                <h3 className="text-gradient">Tech Used</h3>
                <div className="project__tech-container">
                  {project.techUsed.map((tech) => (
                    <div className="project__tech-img">
                      <img src={tech} alt="tech" />
                    </div>
                  ))}
                </div>
                <div className="button-links__container">
                  <a href={project.githubLink}>
                    <button className="bg-gradient-dark links-btn">
                      <span className="text-gradient-orange"> Github</span>
                    </button>
                  </a>

                  <a href={project.productionLink}>
                    <button className="bg-gradient-dark links-btn">
                      <span className="text-gradient-orange">Live</span>
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
