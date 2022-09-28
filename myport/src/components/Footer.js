import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/svgtopng/logo.png";
import navIcon1 from "../assets/img/svgtopng/nav-icon1.png";
import navIcon2 from "../assets/img/svgtopng/image.png";
import navIcon3 from "../assets/img/svgtopng/image2.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{ paddingTop: "50px" }}>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <h1>Siddharth Samanta</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/siddharthsamanta/" target="blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/cyber-sid " target="blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="mailto:93siddhartha@gmail.com">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <p>Siddharth's Portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
