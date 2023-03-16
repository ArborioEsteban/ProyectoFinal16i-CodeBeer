import { Row, Col, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import "./AcercaDe.css";
import Footer from "./Footer/Footer"; 
const AcercaDe = () => {
  return (
    <>
      <h2 id="datosContacto" className="text-center H2Cont ">
        Datos De Contacto
      </h2>

      <Container>
        <div className="  py-3 text-center  group">
          <hr className="fs-1"></hr>
          <Row className=" mb-5">
            <ListGroup as={Col} md="6">
              <ListGroup.Item>Nombre: Medina Juan Carlos</ListGroup.Item>
              <ListGroup.Item className="text-break">
                Email: Juan_carlos_medina2030@hotmail.com
              </ListGroup.Item>
              <ListGroup.Item>Provincia: Tucuman</ListGroup.Item>
            </ListGroup>
            <ListGroup as={Col} md="6">
              <img
                className="rounded-circle  AVATAR m-auto mt-3"
                src="https://live.staticflickr.com/65535/52705483608_0615db0944_n.jpg"
                alt="Carlos"
              />
            </ListGroup>
          </Row>
          <hr className="fs-1"></hr>
          <Row className="mb-5">
            <ListGroup as={Col} md="6" className="mt-4">
              <ListGroup.Item>Nombre:Arborio Esteban David</ListGroup.Item>
              <ListGroup.Item>Email: estebanarborio@gmail.com</ListGroup.Item>
              <ListGroup.Item>Provincia: Tucuman</ListGroup.Item>
            </ListGroup>
            <ListGroup as={Col} md="6">
              <img
                className="rounded-circle  AVATAR m-auto mt-3"
                src="https://live.staticflickr.com/65535/52705483643_f20c91d140_z.jpg"
                alt="esteban"
              />
            </ListGroup>
          </Row>
          <hr className="fs-1"></hr>
          <Row className="mb-5">
            <ListGroup as={Col} md="6" className="mt-4">
              <ListGroup.Item>Nombre:Vizcarra Ruben</ListGroup.Item>
              <ListGroup.Item>Email: fabri.vizcarra22@gmail.com</ListGroup.Item>
              <ListGroup.Item>Provincia: Tucuman</ListGroup.Item>
            </ListGroup>
            <ListGroup as={Col} md="6" className="mt-4">
              <img
                className="rounded-circle  AVATAR m-auto mt-3"
                src="https://live.staticflickr.com/65535/52704477132_5911b79ff3_c.jpg"
                alt="ruben"
              />
            </ListGroup>
          </Row>
          <hr className="fs-1"></hr>
          <Row className="mb-5">
            <ListGroup as={Col} md="6" className="mt-4">
              <ListGroup.Item>Nombre: Lancioni Florencia Noelia</ListGroup.Item>
              <ListGroup.Item>Email: Florchuu1995@hotmail.com</ListGroup.Item>
              <ListGroup.Item>Provincia: Tucuman</ListGroup.Item>
            </ListGroup>
            <ListGroup as={Col} md="6">
              <img
                className="rounded-circle  AVATAR m-auto mt-3"
                src="https://live.staticflickr.com/65535/52705250009_5225c5ea8d_c.jpg"
                alt="flor"
              />
            </ListGroup>
          </Row>
          <hr className="fs-1"></hr>
          <Row className="mb-5">
            <ListGroup as={Col} md="6" className="mt-4">
              <ListGroup.Item>Nombre: Guillen Paula Lucia</ListGroup.Item>
              <ListGroup.Item>Email: paulaguillen.iq@gmail.com</ListGroup.Item>
              <ListGroup.Item>Provincia: Tucuman</ListGroup.Item>
            </ListGroup>
            <ListGroup as={Col} md="6">
              <img
                className="rounded-circle  AVATAR m-auto mt-3"
                src="https://live.staticflickr.com/65535/52705250049_48782fe6f6_c.jpg"
                alt="paula"
              />
            </ListGroup>
          </Row>
          <hr className="fs-1"></hr>
          <Row className="mb-5">
            <ListGroup as={Col} md="6" className="mt-4">
              <ListGroup.Item>Nombre: Mercado Candela M.</ListGroup.Item>
              <ListGroup.Item>Email: mercadocandela16@gmail.com</ListGroup.Item>
              <ListGroup.Item>Provincia: Tucuman</ListGroup.Item>
            </ListGroup>
            <ListGroup as={Col} md="6">
              <img
                className="rounded-circle AVATAR m-auto mt-3"
                src="https://live.staticflickr.com/65535/52704996061_6be55c2459_c.jpg"
                alt="candela"
              />
            </ListGroup>
          </Row>
        </div>
      </Container>
      <Container>
      <Footer/>
      </Container>
    </>
  );
};

export default AcercaDe;
