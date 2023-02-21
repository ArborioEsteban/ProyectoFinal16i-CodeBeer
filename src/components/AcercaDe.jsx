import { Row, Col, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <>
      <h2 id="datosContacto" className="text-center py-5  ">
        Datos De Contacto
      </h2>
      <Container>
      <div className=" py-5 text-center group">
        <Row className="mb-5">
          <ListGroup as={Col} md="6">
            <ListGroup.Item >
              Nombre: Medina Juan Carlos
            </ListGroup.Item>
            <ListGroup.Item >
              Email: Juan_carlos_medina2030@hotmail.com
            </ListGroup.Item>
            <ListGroup.Item >
              Provincia: Tucuman
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as={Col} md="6">
            <img
              className="rounded-circle  AVATAR "
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f3f3fb618d44f2c5b1011f/download/carlos.jpg"
              alt="Carlos"
            />
          </ListGroup>
        </Row>

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
              className="rounded-circle  AVATAR "
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f10ed8dfb062168a1b4cc1/download/image.png"
              alt="esteban"
            />
          </ListGroup>
        </Row>

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
              className="rounded-circle  AVATAR "
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f3f5decb9a8590fa1b4900/download/IMG_20220812_160555748.jpg"
              alt="ruben"
            />
          </ListGroup>
        </Row>

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
              className="rounded-circle  AVATAR "
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f3f45a8efacaf3eca652da/download/FB_IMG_1659647280750~2%5B159%5D.jpg"
              alt="flor"
            />
          </ListGroup>
        </Row>

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
              className="rounded-circle  AVATAR "
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f3c86243d5399b3aa2d8e4/download/Paula_Guill%C3%A9n.png"
              alt="paula"
            />
          </ListGroup>
        </Row>

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
              className="rounded-circle  AVATAR "
              src="https://trello.com/1/cards/63f0f49470d2cf0664031c33/attachments/63f4093fba8a7b66490558f8/download/candela.png"
              alt="candela"
            />
          </ListGroup>
        </Row>
      </div>
</Container>
      <section className="w-50 mx-auto text-center pt-5 my-5">
        <h1 className="p-4 fs-2 border-top text-light border-3">Direccion</h1>

        <div className="map-responsive ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1676604491283!5m2!1ses-419!2sar"
            width="700"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      
    </>
  );
};

export default AcercaDe;
