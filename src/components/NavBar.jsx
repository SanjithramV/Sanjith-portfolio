import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import linkedin from '../assets/img/nav-icon1.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
    setExpanded(false);
  }

  return (
    <Router>
      <Navbar 
        expand="md" 
        className={scrolled ? "scrolled" : ""} 
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="/">
            {/* Add your logo here if needed */}
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {[
                ['home', 'Home'],
                ['skills', 'Skills'],
                ['experience', 'Experience'],
                ['projects', 'Projects'],
                ['education', 'Education']
              ].map(([value, text]) => (
                <Nav.Link
                  key={value}
                  href={`#${value}`}
                  className={activeLink === value ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink(value)}
                >
                  {text}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a 
                  href="https://www.linkedin.com/in/sanjith-ram-a00b1321b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}