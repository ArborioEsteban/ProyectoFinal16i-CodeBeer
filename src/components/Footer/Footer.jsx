import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid text-light ">
      <div className="py-3 Lgg">
        <div className="row">
          <div className="col ">
            <h5 className="logo">Code&Beer</h5>

            <Nav.Link as={Link} to="/">
              <img
                src="https://live.staticflickr.com/65535/52696635898_5d1c068db0_b.jpg"
                alt="Code&Beer"
                className="logo LOGO "
              />
            </Nav.Link>
          </div>

          <div className="col SitioWeb">
            <h5>Redes Sociales</h5>

            <Nav.Link as={Link} to="https://www.instagram.com/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                alt="Instagram"
                className="SitiosWeb "
              />
              Instagram
            </Nav.Link>

            <Nav.Link as={Link} to="https://es-la.facebook.com/">
              <img
                src="https://www.pngarts.com/files/10/Vector-Facebook-Logo-Black-And-White-PNG-Transparent-Image.png"
                alt="Facebook"
                className="SitiosWeb "
              />
              Facebook
            </Nav.Link>
          </div>

          <div className=" col  ">
            <h5>Horarios</h5>

            <div className="text-light">
              <li>Lunes a Domingo 19:00 a 04:00hs</li>
            </div>

            <h5 className="pt-2 ">Direccion</h5>

            <div className="text-light">
              <li>General Paz 576 San Miguel De Tucuman </li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
