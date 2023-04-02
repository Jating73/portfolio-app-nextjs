import React, { useState } from "react";
import { Fa } from 'react-icons'
import Link from "next/link";
import {
  Button,
  Offcanvas,
  Navbar as NavbarBs,
  Container,
  Stack,
} from "react-bootstrap";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Navbar */}
      <NavbarBs sticky="top" className="navbar-bg shadow-sm">
        <Container>
          <span className="brand-name mr-auto">Jatin Gambhir</span>
          <Button
            onClick={handleShow}
            variant="outline-secondary"
            className="rounded-circle"
            style={{ position: "relative", height: "3rem", width: "3rem" }}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </Container>
      </NavbarBs>

      {/* OffCanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Jatin Gambhir</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            <Link
              href="#home"
              style={{ textDecoration: "none" }}
              onClick={handleClose}
            >
              <span className="mx-4 nav-item">
                <i class="fa fa-home"></i> Home
              </span>
            </Link>
            <Link
              href="#about"
              style={{ textDecoration: "none" }}
              onClick={handleClose}
            >
              <span className="mx-4 nav-item">
                <i class="fa fa-user"></i> About Me
              </span>
            </Link>
            <Link
              href="#resume"
              style={{ textDecoration: "none" }}
              onClick={handleClose}
            >
              <span className="mx-4 nav-item">
                <i class="fa fa-book"></i> Resume
              </span>
            </Link>
            {/* <Link href='#testimonial' style={{textDecoration:"none"}} onClick={handleClose}}
                            <span className='mx-4 nav-item'>Testimonial</span>
                        </Link> */}
            <Link
              href="#contact"
              style={{ textDecoration: "none" }}
              onClick={handleClose}
            >
              <span className="mx-4 nav-item">
                <i class="fa fa-phone-square"></i> Contact
              </span>
            </Link>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
