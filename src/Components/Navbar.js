import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Dropdown } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import navIcon2 from "../Images/nav-icon2.svg";
import navIcon3 from "../Images/nav-icon3.svg";
import logo from '../Images/logomain2.png'
import { BrowserRouter as Router, Route, Routes, Link,  Navigate } from 'react-router-dom'

import Main from "./Main";
import ShortForm from "./ShortForm";
import LongForm1 from "./LongForm1";
import FacelessEdits from "./FacelessEdits";

function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
  <div className="d-flex align-items-center">
    <Nav.Link href="https://ibbibhai.com/#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
    <Nav.Link href="https://ibbibhai.com/#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
    <Nav.Link href="https://ibbibhai.com/#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
      Projects
    </Nav.Link>
    <Dropdown>
      <Dropdown.Toggle className="navbar-link" id="dropdown-basic">
        <span className="visually-hidden">Toggle Dropdown</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
  <Dropdown.Item href="https://ibbibhai.com/short-form" className={activeLink === 'short-form' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('short-form')}>Short Form</Dropdown.Item>
  <Dropdown.Item href="https://ibbibhai.com//long-form" className={activeLink === 'long-form' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('long-form')}>Long Form</Dropdown.Item>
  <Dropdown.Item href="https://ibbibhai.com/faceless-edits" className={activeLink === 'faceless-edits' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faceless-edits')}>Faceless Edits</Dropdown.Item>
</Dropdown.Menu>

    </Dropdown>
  </div>
</Nav>


            <span className='navbar-text'>
              <div className='social-icon'>
                <a href='https://www.facebook.com/ibrahim19BBI' target="_blank"><img src={navIcon2} alt=""/></a>
                <a href='https://www.instagram.com/ibbibhai/' target="_blank"> <img src={navIcon3} alt=""/></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Main/> } />
        <Route exact path="/home" element={<Main/> } />
        <Route exact path="/short-form" element={<ShortForm/>} />
        <Route exact path="/long-form" element={<LongForm1/>} />
        <Route exact path="/faceless-edits" element={<FacelessEdits/>} />
      </Routes>
    </Router>
  );
}

export default NavBar;
