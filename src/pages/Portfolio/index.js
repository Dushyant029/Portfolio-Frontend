import React, { useState } from "react";
import LabeledProject from "./LabeledProject";
import ProjectModal from "../../components/ProjectModal";
const Projects = () => {
  const [portfolioItems] = useState([
    {
      name: "DuTrack App",
      image: "/assets/images/1.png",
      deployedLink: "https://github.com/Dushyant029/DuTrackApp#readme",
      gitHubLink: "https://github.com/Dushyant029/DuTrackApp",
    },
    {
      name: "Calcy JS",
      image: "/assets/images/2.png",
      deployedLink: "https://dushyant029.github.io/Calculator-WebApp/",
      gitHubLink: "https://github.com/Dushyant029/Calculator-WebApp",
    },
    {
      name: "Stone Paper Scissor",
      image: "/assets/images/3.png",
      deployedLink: " https://dushyant029.github.io/Stone-Paper-Scissor-Game/",
      gitHubLink: "https://github.com/Dushyant029/Stone-Paper-Scissor-Game",
    },
    {
      name: "Pacman Khele",
      image: "/assets/images/4.png",
      deployedLink: "https://github.com/Dushyant029/Pacman-Khele#readme",
      gitHubLink: "https://github.com/Dushyant029/Pacman-Khele",
    },
    {
      name: "E-Shiksha",
      image: "/assets/images/5.png",
      deployedLink: "https://dushyant029.github.io/E-Shiksha-WebPage/",
      gitHubLink: "https://github.com/Dushyant029/E-Shiksha-WebPage",
    },
    {
      name: "KhaanaKhazana",
      image: "/assets/images/6.png",
      deployedLink: "https://dushyant029.github.io/KhaanaKhazana-WebPage/",
      gitHubLink: "https://github.com/Dushyant029/KhaanaKhazana-WebPage",
    },
  ]);

  const [show, setShow] = useState({
    show: false,
    github: "",
    title: "",
    website: "",
  });

  const handleClose = () => setShow({ ...show, show: false });

  const handleImageClick = (e) => {
    console.log(e.target.parentElement.getAttribute("index"));
    const foundItem = e.target.parentElement.getAttribute("index");
    setShow({
      show: true,
      github: portfolioItems[foundItem].gitHubLink,
      title: portfolioItems[foundItem].name,
      website: portfolioItems[foundItem].deployedLink,
    });
  };

  return (
    <div className="container">
      <div className="col-md-12 col-lg-8 col-sm-12">
        <div className="row">
          <h2>Projects</h2>
        </div>
        <div className="row">
          {portfolioItems.map((project, index) => {
            return (
              <>
                <LabeledProject
                  project={project}
                  key={project.name}
                  index={index}
                  handleImageClick={handleImageClick}
                />
              </>
            );
          })}
        </div>
        <>
          <ProjectModal handleClose={handleClose} {...show} />
        </>
      </div>
    </div>
  );
};

export default Projects;
