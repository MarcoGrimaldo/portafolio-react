import Button from "react-bootstrap/Button";
import { Card as CardBootstrap } from "react-bootstrap";

const Card = ({ title, text, link }) => {
  return (
    <CardBootstrap style={{ width: "13rem", margin: "10px" }}>
      <CardBootstrap.Img variant="top" src="https://picsum.photos/300/200" />
      <CardBootstrap.Body>
        <CardBootstrap.Title>{title}</CardBootstrap.Title>
        <CardBootstrap.Text>{text}</CardBootstrap.Text>
        <Button variant="primary" href={link}>
          See!
        </Button>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
};

export default Card;
