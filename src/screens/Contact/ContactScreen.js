import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { createContactMessage } from "../../actions/contactActions";
import { useDispatch, useSelector } from "react-redux";
import { CONTACT_CREATE_RESET } from "../../constants/contactConstants";
import classes from "./Contact.module.css";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
const Contact = ({ match }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const messageSend = useSelector((state) => state.messageSend);
  const { contact, success, error, loading, respMessage } = messageSend;
  console.log("message", messageSend);
  useEffect(() => {
    if (success) {
      setEmail("");
      setMessage("");
      setName("");
      setSubject("");
      setTimeout(() => {
        dispatch({ type: CONTACT_CREATE_RESET });
      }, 2000);
    }
  }, [dispatch, match, success]);
  // const { loading, error, s,page,pages } = message;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("name", email);
    console.log("name", subject);
    console.log("name", message);
    dispatch(
      createContactMessage({
        name,
        email,
        subject,
        message,
      })
    );
  };
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {respMessage && <Message variant="info">{respMessage}</Message>}
          <Form className={classes.form} onSubmit={submitHandler}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Medicine Query"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Send Message</Button>
          </Form>
        </>
      )}
    </Container>
  );
};
export default Contact;
