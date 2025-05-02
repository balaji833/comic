import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Carousel } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';
import comic from '../assets/comic.jpg'; 
import comic1 from '../assets/comic1.jpg';
import dc from '../assets/dc.jpg';
import de from '../assets/de.jpg';
function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container mt-5 text-center">
      <h1 className="display-3 fw-bold text-warning animate__animated animate__fadeInDown">Comics World</h1>
      <p className="lead text-muted animate__animated animate__fadeInUp">
        Laugh harder, dream bigger, and read weirder.
      </p>

      {/* Carousel of Comics */}
      <Carousel className="my-4 shadow-lg">
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={comic}
            alt="First comic"
          />
          <Carousel.Caption>
            <h3>The Brave Hero</h3>
            <p>He saves the world before breakfast.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={comic1}
            alt="Second comic"
          />
          <Carousel.Caption>
            <h3>Galaxy Tales</h3>
            <p>Space drama + banana peels = chaos!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={dc}
            alt="Third comic"
          />
          <Carousel.Caption>
            <h3>Mystery Chronicles</h3>
            <p>Not even the writer knows the ending.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Button variant="outline-danger" size="lg" className="mb-4 animate__animated animate__pulse animate__infinite" onClick={handleShow}>
        🎯 View Featured Comic
      </Button>

      {/* Start Reading Section */}
      <div className="bg-light p-4 rounded mb-4">
        <h4>Start Reading</h4>
        <p>All genres. All laughs. No judgment.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <span className="badge bg-danger fs-6 p-2">Action</span>
          <span className="badge bg-success fs-6 p-2">Romance</span>
          <span className="badge bg-warning text-dark fs-6 p-2">Sci-Fi</span>
          <span className="badge bg-dark fs-6 p-2">Mystery</span>
          <span className="badge bg-info text-dark fs-6 p-2">Adventure</span>
        </div>
      </div>

      <blockquote className="blockquote fst-italic text-secondary">
        “I came for the action... stayed for the dancing alien robots.” – Comic Fan #1347
      </blockquote>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>🔥 Featured Comic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>The Brave Hero</h4>
          <p>
            Ever seen someone stop a meteor with a slice of pizza? Now you have.
            This comic will melt your brain (in a good way).
          </p>
          <img
            src={de}
            alt="The Brave Hero"
            className="img-fluid rounded"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="danger" onClick={handleClose}>Read Now</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
