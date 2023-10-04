import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";

const CollapsibleExample = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={styles.navbar}
      data-bs-theme="dark"
    >
      <Container className="justify-content-end">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link
              eventKey={2}
              href="https://drive.google.com/file/d/1ahd1HfaaDtEtjujHnFJLLOkVrjI7Loae/view?usp=sharing"
            >
              My CV Here!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CollapsibleExample;
