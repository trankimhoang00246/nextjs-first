'use client'

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link href={"/"} className="nav-link">
            Tran Kim Hoang
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={"/blogs"} className="nav-link">
              Blogs
            </Link>
            <Link href={"/facebook"} className="nav-link">
              Facebook
            </Link>
            <Link href={"/tiktok"} className="nav-link">
              Tiktok
            </Link>
            <Link href={"/youtube"} className="nav-link">
              Youtube
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;