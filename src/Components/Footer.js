// Updated Footer.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Images/logomain2.png";
import navIcon1 from "../Images/nav-icon1.svg";
import navIcon2 from "../Images/nav-icon2.svg";
import navIcon3 from "../Images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ibrahim-raja-171013236/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/ibrahim19BBI" target="_blank"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/ibbibhai/" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>

        {/* New Section for Services, Contact Details, and Address */}
        <Row className="mt-4">
          <Col xs={12} sm={4}>
            <h5>Services</h5>
            <ul>
              <li>Video Editing</li>
              <li>Thumbnail Designing</li>
              <li>Script Writing</li>
              <li>Youtube Automation</li>
            </ul>
          </Col>
          <Col xs={12} sm={4}>
            <h5>Contact Details</h5>
            <p>Email: ibbibhai007@gmail.com</p>
            
          </Col>
          <Col xs={12} sm={4}>
            <h5>Experience</h5>
            <p>5+ Years</p>
            <p>Famously Known as Ibbibhai on social Media!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
