import { Row, Col, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <>


    <Container >
      <h2 id="datosContacto" className="text-center H2Cont ">
        Datos De Contacto
      </h2>
        
      <div className="  py-3 text-center  group">
        <Row className=" mb-5">
          <ListGroup as={Col} md="6">
            <ListGroup.Item >
              Nombre: Medina Juan Carlos
            </ListGroup.Item>
            <ListGroup.Item className="text-break">
              Email: Juan_carlos_medina2030@hotmail.com
            </ListGroup.Item>
            <ListGroup.Item >
              Provincia: Tucuman
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as={Col} md="6">
            <img
              className="rounded-circle  AVATAR m-auto mt-3"
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f3f3fb618d44f2c5b1011f/download/carlos.jpg"
              alt="Carlos"
            />
          </ListGroup>
        </Row>
        <hr className="fs-1"></hr>
        <Row className="mb-5"  >
          <ListGroup  as={Col} md="6"  >
            <ListGroup.Item >
              Nombre:Arborio Esteban David
            </ListGroup.Item>
            <ListGroup.Item >
              Email: estebanarborio@gmail.com
            </ListGroup.Item>
            <ListGroup.Item >
              Provincia: Tucuman
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as={Col} md="6">
            <img
              className="rounded-circle  AVATAR m-auto mt-3"
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f10ed8dfb062168a1b4cc1/download/image.png"
              alt="Carlos"
            />
          </ListGroup>
        </Row>
        <hr className="fs-1"></hr>
        <Row className="mb-5">
          <ListGroup as={Col} md="6">
            <ListGroup.Item >
              Nombre:Vizcarra Ruben
            </ListGroup.Item>
            <ListGroup.Item >
              Email: fabri.vizcarra22@gmail.com
            </ListGroup.Item>
            <ListGroup.Item >
              Provincia: Tucuman
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as={Col} md="6">
            <img
              className="rounded-circle  AVATAR m-auto mt-3"
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f3f5decb9a8590fa1b4900/download/IMG_20220812_160555748.jpg"
              alt="Carlos"
            />
          </ListGroup>
        </Row>
        <hr className="fs-1"></hr>
        <Row className="mb-5">
          <ListGroup as={Col} md="6">
            <ListGroup.Item >
              Nombre: Lancioni Florencia Noelia
            </ListGroup.Item>
            <ListGroup.Item >
              Email: Florchuu1995@hotmail.com
            </ListGroup.Item>
            <ListGroup.Item >
              Provincia: Tucuman
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as={Col} md="6">
            <img
              className="rounded-circle  AVATAR m-auto mt-3"
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f3f45a8efacaf3eca652da/download/FB_IMG_1659647280750~2%5B159%5D.jpg"
              alt="Carlos"
            />
          </ListGroup>
        </Row>
        <hr className="fs-1"></hr>
        <Row className="mb-5">
          <ListGroup as={Col} md="6">
            <ListGroup.Item >
              Nombre: Guillen Paula Lucia
            </ListGroup.Item>
            <ListGroup.Item >
              Email: paulaguillen.iq@gmail.com
            </ListGroup.Item>
            <ListGroup.Item >
              Provincia: Tucuman
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as={Col} md="6">
            <img
              className="rounded-circle  AVATAR m-auto mt-3"
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f3c86243d5399b3aa2d8e4/download/Paula_Guill%C3%A9n.png"
              alt="Carlos"
            />
          </ListGroup>
        </Row>
        <hr className="fs-1"></hr>
        <Row className="mb-5">
          <ListGroup as={Col} md="6">
            <ListGroup.Item >
              Nombre: Mercado Candela M.
            </ListGroup.Item>
            <ListGroup.Item >
              Email: mercadocandela16@gmail.com
            </ListGroup.Item>
            <ListGroup.Item >
              Provincia: Tucuman
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as={Col} md="6">
            <img
              className="rounded-circle AVATAR m-auto mt-3"
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f4093fba8a7b66490558f8/download/candela.png"
              alt="Carlos"
            />
          </ListGroup>
        </Row>
      </div>
</Container>
      
      
    </>
  );
};

export default AcercaDe;
