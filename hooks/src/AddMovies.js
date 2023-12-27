import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './App.css';
const AddMovies=({addNewMovie})=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[name,setName]=useState("")
  const[description,setDescription]=useState("")
  const[rating,setRating]=useState("")
  const[url,setUrl]=useState("")
  const handleSave=()=>{
    let newMovie={
      name,
      description,
      url,
      rating,

    }
    addNewMovie(newMovie)
  }


    return(
      <div className='nn'>
      <button className='btn' onClick={handleShow}>
        Add a movie of your choice
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className='overlay'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e)=>setName(e.target.value)}
                value={name}
              />
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
              />
              <Form.Label>posterURL</Form.Label>
              <Form.Control
                type="url"  
                autoFocus
                onChange={(e)=>setUrl(e.target.value)}
                value={url}
              />
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                autoFocus
                onChange={(e)=>setRating(e.target.value)}
                value={rating}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer className='overlay'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        
  

    )
}
export default AddMovies