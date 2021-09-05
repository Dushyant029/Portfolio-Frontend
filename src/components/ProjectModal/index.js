import React from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";

const ProjectModal = (props) => {
  const { handleClose, show, github, title, website } = props;

  return (
    <Modal show={show} onHide={handleClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup.Item action href={website}>
          Link to Deployed Website
        </ListGroup.Item>
        <ListGroup.Item action href={github}>
          GitHub Repository
        </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
