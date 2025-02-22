import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import * as ReactBootStrap from 'react-bootstrap';

function Header() {
  return (

    <ReactBootStrap.Navbar bg="light" expand="lg">
    <ReactBootStrap.Container fluid>
      <ReactBootStrap.Navbar.Brand href="#">Masterpiece</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
      <ReactBootStrap.Navbar.Collapse id="navbarScroll">
        <ReactBootStrap.Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <ReactBootStrap.Nav.Link href="#action1">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#action2">Account</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#action2">Cart</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#action2">Checkout</ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown title="Services" id="navbarScrollingDropdown">
            <ReactBootStrap.NavDropdown.Item href="#action3">Laptop checkup</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action4">Systems diagnostics</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action4">Phone & Phone stickers</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action5">
              More about the Masterpiece Family
            </ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Form className="d-flex">
          <ReactBootStrap.FormControl
            type="search"
            placeholder="Search products here"
            className="me-2"
            aria-label="Search"
          />
          <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
  );
  
}

export default Header;
