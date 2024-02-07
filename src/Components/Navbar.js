import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import {Nav,Navbar,NavDropdown} from "react-bootstrap"
import { HashLink } from 'react-router-hash-link';
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import tiktok from '../Images/tiktok.png'
import navIcon1 from "../Images/nav-icon1.svg";
import navIcon2 from "../Images/nav-icon2.svg";
import navIcon3 from "../Images/nav-icon3.svg";
import logo from '../Images/logomain2.png'
import {
  BrowserRouter as Router
} from "react-router-dom";

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
    <Navbar expand="md " className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.facebook.com/ibrahim19BBI' target="_blank"><img src={navIcon2} alt=""/></a>
              <a href='https://www.instagram.com/ibbibhai/' target="_blank"> <img src={navIcon3} alt=""/></a>
              <a href='https://www.tiktok.com/@_ibbibhai' target="_blank"><img src={tiktok} alt=""/></a>
            </div>
            <HashLink to='#connect'>
            <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
            {/* <HashLink to='#projects' className='navbar-link' onClick={() => onUpdateActiveLink('projects')}>Short-Form Edits</HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  );
}

export default NavBar;