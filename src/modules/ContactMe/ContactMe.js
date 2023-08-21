import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={styles.container}>
      <Form className={styles.formContainer}>
        <h2>Contact Me!</h2>
        <div className={styles.containerInputs}>
          <Form.Group controlId="formBasicEmail" className={styles.input}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Your name" />
          </Form.Group>
          <Form.Group className={styles.input} controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="password" placeholder="Your email" />
          </Form.Group>
        </div>
        <Form.Group className={styles.textArea} controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            type="password"
            placeholder="Your message here..."
          />
        </Form.Group>
        <Button variant="primary" type="submit" className={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactMe;
