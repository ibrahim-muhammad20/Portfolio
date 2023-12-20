import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import {Nav,Navbar,NavDropdown} from "react-bootstrap"
import { HashLink } from 'react-router-hash-link';
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import linkedin from '../Images/linkedin.png'
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
              <a href='#'><img src={facebook} alt=""/></a>
              <a href='#'><img src={instagram} alt=""/></a>
              <a href='#'><img src={linkedin} alt=""/></a>
            </div>
            <HashLink to='#connect'>
            <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  );
}

export default NavBar;