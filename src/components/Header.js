import React from 'react'

import {Link} from 'react-router-dom';

import {Navbar, Nav, Container} from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='py-4'>
      <Container>
        <Navbar.Brand href="#home">Jet & Set</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Link style={{textDecoration:'none', color:'white'}} to="/">Home</Link>
            <Link style={{textDecoration:'none', color:'white'}} to="/explore">Explore</Link>
            <Link style={{textDecoration:'none', color:'white'}} to="/contact-us">Contact us</Link>
            <Link style={{textDecoration:'none', color:'white'}} to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>

  )
}

export default Header