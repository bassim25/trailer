import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Add = ({ show, handleClose, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    im: '',
    back: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  return (
    <div>
      {/* Add this line to handle the show */}
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formtitle">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={newMovie.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formdiscription">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={newMovie.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formIm">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter image URL"
                name="im"
                value={newMovie.im}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBack">
              <Form.Label>Background</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter background URL"
                name="back"
                value={newMovie.back}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="m-3" controlId="formtrailerLink">
            <Form.Label>trailerLink</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter trailerLink"
              name="trailerLink"
              value={newMovie.trailerLink}
              onChange={handleInputChange}
            />
          </Form.Group>
            {/* The rest of your Form.Group components */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Add this line to handle the addMovie */}
          <Button variant="primary" onClick={() => { addMovie(newMovie); handleClose(); }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
