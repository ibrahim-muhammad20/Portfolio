import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Images/rjlime.png';
import navIcon2 from '../Images/nav-icon2.svg';
import navIcon3 from '../Images/nav-icon3.svg';
import Main from './Main';
import ShortForm from './ShortForm';
import LongForm1 from './LongForm1';
import FacelessEdits from './FacelessEdits';

const StyledNavbar = styled(Navbar)`
  background-color: ${({ scrolled }) => (scrolled ? '#000' : 'transparent')};
  padding: 12px 0;
  height: ${({ isToggled }) => (isToggled ? '60%' : '15%')};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  transition:  0.32s ease-in-out;

  .navbar-collapse {
    justify-content: space-between;
  }

  .navbar-nav {
    align-items: center;
    display: flex;
  }

  .nav-link {
    font-weight: 400;
    color: #fff !important;
    letter-spacing: 0.8px;
    padding: 0 25px;
    font-size: 18px;
    opacity: 0.75;
    position: relative;

    &:hover,
    &.active {
      opacity: 1;
    }

    @media (max-width: 768px) {
      width: 100%;
      display: block;
      margin: 10px 0;
    }
  }

  .dropdown {
    .dropdown-menu {
      width: auto;

      .dropdown-item {
        color: #000;
        text-align: center;

        &:hover,
        &.active {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  .navbar-toggler-icon {
    width: 24px;
    height: 17px;
    background-image: none;
    position: relative;
    border-bottom: 2px solid #fff;
    transition: all 300ms linear;
    top: -2px;
  }

  .navbar-toggler-icon:after,
  .navbar-toggler-icon:before {
    width: 24px;
    position: absolute;
    height: 2px;
    background-color: #fff;
    top: 0;
    left: 0;
    content: '';
    z-index: 2;
    transition: all 300ms linear;
  }

  .navbar-toggler-icon:after {
    top: 8px;
  }

  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
    transform: rotate(45deg);
    background-color: #fff;
    height: 2px;
  }

  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
    transform: translateY(8px) rotate(-45deg);
    background-color: #fff;
    height: 2px;
  }

  .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
    border-color: transparent;
  }

  @media (max-width: 768px) {
    background-color: #000; /* Add background color */
  }
`;

const StyledLogo = styled.img`
  height: 120px;

  @media (max-width: 768px) {
    height: 70px;
    width: auto;
  }
`;

const StyledButton = styled.button`
  font-weight: 700;
  color: #fff;
  border: 1px solid #fff;
  padding: 18px 34px;
  font-size: 18px;
  margin-left: 18px;
  position: relative;
  background-color: transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #121212;
  }

  &:hover::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    margin: 10px 0;
  }
`;

const StyledSocialIcon = styled.div`
  display: inline-block;
  margin-left: 14px;

  a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
    position: relative;

    img {
      width: 60%;
      z-index: 1;
      transition: 0.3s ease-in-out;
    }

    &:hover::before {
      content: "";
      width: 42px;
      height: 42px;
      position: absolute;
      background-color: #ffffff;
      border-radius: 50%;
      transform: scale(0);
      transition: 0.3s ease-in-out;
    }

    &:hover img {
      filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%) contrast(86%);
    }
  }
`;

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleNavbar = () => {
    setIsToggled(!isToggled);
  };

  const domain = window.location.origin;

  return (
    <Router>
      <StyledNavbar expand="md" scrolled={scrolled} isToggled={isToggled}>
        <Container>
          <Navbar.Brand href="#home">
            <StyledLogo src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={`${domain}/#home`} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href={`${domain}/#skills`} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href={`${domain}/#projects`} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle className="navbar-link" id="dropdown-basic">
                  <span className="visually-hidden">Toggle Dropdown</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href={`${domain}/short-form`} className={activeLink === 'short-form' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('short-form')}>Short Form</Dropdown.Item>
                  <Dropdown.Item href={`${domain}/long-form`} className={activeLink === 'long-form' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('long-form')}>Long Form</Dropdown.Item>
                  <Dropdown.Item href={`${domain}/faceless-edits`} className={activeLink === 'faceless-edits' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faceless-edits')}>Faceless Edits</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <span className='navbar-text'>
              <StyledSocialIcon>
                <a href='https://www.facebook.com/ibrahim19BBI' target="_blank"><img src={navIcon2} alt=""/></a>
                <a href='https://www.instagram.com/ibbibhai/' target="_blank"> <img src={navIcon3} alt=""/></a>
              </StyledSocialIcon>
              <HashLink to='#connect'>
                <StyledButton><span>Let’s Connect</span></StyledButton>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/home" element={<Main />} />
        <Route exact path="/short-form" element={<ShortForm />} />
        <Route exact path="/long-form" element={<LongForm1 />} />
        <Route exact path="/faceless-edits" element={<FacelessEdits />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
