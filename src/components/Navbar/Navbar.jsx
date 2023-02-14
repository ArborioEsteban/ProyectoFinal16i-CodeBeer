import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";

import "../Navbar/Navbar1.css";


const NavBarCode = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <Navbar className="navBg"  variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
           Code&Beer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav nav-tabs me-auto mx-auto mb-lg-0 justify-content-end  ">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/AcercaDe">
                Acerca De
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto mt-3">
              <Button
                variant="danger"
                className="ms-2"
                onClick={() => handleClick("/login")}
              >
                Login
              </Button>
              {/* Link o NavLink  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavBarCode;
