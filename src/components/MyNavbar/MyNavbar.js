import React, { useState } from "react";

import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

import "./MyNavbar.css";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu_icon.svg";

// Router
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar expand="lg" className="bg-transparent">
        <NavbarBrand href="#">
          <Logo width="45" height="45" className="d-inline-block rounded" />
        </NavbarBrand>
        <div className="d-flex justify-content-between align-items-center order-sm-1 order-md-0 order-lg-1">
          <Button className="btn me-2 bg-transparent border-0 text-black">
            Sign Up
          </Button>
          <Button className="btn main-button">Login</Button>
        </div>
        <NavbarToggler onClick={toggle}>
          <MenuIcon />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto my-2 my-lg-0 ms-lg-4" navbar>
            <NavItem>
              <Link to="/" className="nav-link active rounded">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="#courses" className=" rounded">
                Courses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className=" rounded">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pricing" className=" rounded">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" className=" rounded">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <Link to="/dashboard" className="nav-link rounded text-orange-50">
                Dashboard
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <hr />
    </Container>
  );
};

export default MyNavbar;
