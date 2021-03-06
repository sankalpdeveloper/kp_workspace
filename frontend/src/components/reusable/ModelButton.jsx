import React, { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function ModelButton() {
  // const baseUrl = `${process.env.baseUrl}/enquiry`
  const baseUrl = 'http://127.0.0.1:5000/product/enquiry'
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitEnquery = (e) => {
    e.preventDefault()
    const customer_number = document.getElementById('customer_number').value
    const discription = document.getElementById('discription').value
    const data = {
      "customer_number": customer_number,
      "discription": discription
    }
    console.log(data);
    axios.post(baseUrl,data).then((response)=>{
      console.log(response.data)
    })
  }
  return (
    <>
      <Button
        className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
        variant="primary"
        onClick={handleShow}
      >
        Enquiry Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get In Touch</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {" "}
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" id="customer_number" placeholder="Enter Your Phone Number" />
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text"  id="discription" placeholder="Description"  />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitEnquery} type="submit">
                Submit
              </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelButton;
