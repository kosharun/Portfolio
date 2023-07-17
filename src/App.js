import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './App.css';
import About from './components/About';
import Top from './components/Top';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Navbar.Toggle aria-controls="navbar" className="m-auto" />
        <Navbar.Collapse id="navbar">
          <Nav className="m-auto">
            <Nav.Link href="#top">Top</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Sections */}
      <Top />
      <About />
      {/* Projects section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact section */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
