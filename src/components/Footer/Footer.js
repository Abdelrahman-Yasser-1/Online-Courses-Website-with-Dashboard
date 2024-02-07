import React from "react";

// Bootstrap Components
import { Container, Row, Col } from "reactstrap";

// Assets
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-white" id="contact">
      <Container className="py-5 px-4">
        <Row className="g-3 g-lg-4 row-cols-md-2">
          <Col sm={6} className="d-flex flex-column gap-4">
            <Logo
              width="40"
              height="40"
              className="d-inline-block align-text-top rounded"
            />
            <div className="icon-link">
              <EmailIcon />
              hello@skillbridge.com
            </div>
            <div className="icon-link">
              <PhoneIcon />
              +91 91813 23 2309
            </div>
            <div className="icon-link">
              <LocationIcon />
              Somewhere in the World
            </div>
          </Col>
          <Col sm={6}>
            <Row className="row-cols-2 row-cols-lg-3 row-cols-md-2 g-3 g-lg-4">
              <Col sm={2} className="p-0">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 fw-bold">Home</li>
                  <li className="list-group-item border-0 text-grey-35">
                    Benefits
                  </li>
                  <li className="list-group-item border-0 text-grey-35">
                    Our Courses
                  </li>
                  <li className="list-group-item border-0 text-grey-35">
                    Our Testimonials
                  </li>
                  <li className="list-group-item border-0 text-grey-35">
                    Our FAQ
                  </li>
                </ul>
              </Col>
              <Col sm={2} className="p-0">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 fw-bold">About Us</li>
                  <li className="list-group-item border-0 text-grey-35">
                    Company
                  </li>
                  <li className="list-group-item border-0 text-grey-35">
                    Achievements
                  </li>
                  <li className="list-group-item border-0 text-grey-35">
                    Our Goals
                  </li>
                </ul>
              </Col>
              <Col sm={2} className="p-0">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 fw-bold">
                    Social Profiles
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex">
                      <span className="badge me-3 bg-white-97 border-white-95 p-2">
                        <FacebookIcon />
                      </span>
                      <span className="badge me-3 bg-white-97 border-white-95 p-2">
                        <TwitterIcon />
                      </span>
                      <span className="badge me-3 bg-white-97 border-white-95 p-2">
                        <LinkedInIcon />
                      </span>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr className="container" />
      <p className="text-center px-3 py-4 text-grey-40 m-0">
        &copy; 2023 Skillbridge. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
