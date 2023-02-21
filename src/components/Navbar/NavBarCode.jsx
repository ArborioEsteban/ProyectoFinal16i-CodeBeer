import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";


import "../Navbar/Navbar1.css";


const isLoggedIn = true;

const NavBarCode = () => {
  
  const navigate = useNavigate();

  const handleCLick = (route) =>{
    navigate(route);
  }

 
  return (
    <>
      <Navbar className="navBg fixed-top"  variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
           
           <img src="https://live.staticflickr.com/65535/52696635898_5d1c068db0_b.jpg" alt="Code&Beer" className="CodeBeer" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav nav-tabs  me-auto mx-auto mb-lg-0 justify-content-end fs-5  ">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/AcercaDe">
                Acerca De Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/FormContacto">
                Contacto
              </Nav.Link>
            </Nav>

            <Nav className="p-2  ">
              <Button
             onClick={()=> handleCLick ('/FormLogin')}
                variant="dark "
                className="ms-2"
                id="myloginBtn"
                
              >
                 `{isLoggedIn ?  'Logout' :
                  'Login'}` 
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
