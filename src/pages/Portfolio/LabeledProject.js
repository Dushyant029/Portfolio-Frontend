import React from "react";

const LabeledProject = ({ index, project, handleImageClick }) => {
  return (
    <div className="col-sm-6 w-100 p-3 justify-content-sm-center">
      <div
        index={index}
        onClick={(e) => {
          handleImageClick(e);
        }}
        className="innerlabelpicture"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        data-link={project.deployedLink}
      >
        <img src={project.image} className="img-fluid" alt="..." />
        <div className="innerlabel">{project.name}</div>
      </div>
    </div>
  );
};

export default LabeledProject;
