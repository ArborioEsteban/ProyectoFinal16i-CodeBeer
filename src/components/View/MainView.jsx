import React from "react";
import {Container, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./MainView.css";

import { IoMdBeer } from "react-icons/io";
import Footer from "../Footer/Footer";

const MainView = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    Swal.fire({
      title: "Code&Beer",
      timer: 2000,
      showCancelButton: false,
      showConfirmButton: false,
      background: "#ecb465",
    }).then(() => {
      navigate("/FormLogin");
    });
  };

  return (
    <>
      <Container className="d-flex  justify-content-center flex-column text-center mt-5 vh-100 ">
        <h1 className="align-items-center mt-5 pt-4 titulo textBienvenidos">
          Bienvenidos a Code & Beer
        </h1>

        
        <img src="https://imageup.me/images/7252be06-9860-4ef9-80cc-17cd3e79cee8.png" alt="Code&Beer" 
        className="CodeBeer logoTapaCerveza w-50 align-self-center bg-transparent px-2" 
        onClick={() => handleClick()}/>

        
      </Container>

      <div className=" container  color col-lg-8 col-sm-8 col-md-8">
        <div className="row justify-content-center"></div>

        <div className="col-sm-8 pt-3 pb-3"></div>

        {/* <h1 className="text-center py-5 info">Bienvenidos a Code&Beer</h1> */}

        <h2 className="info text-center">¿Quienes Somos?</h2>

        <p className="py-4 fs-4 info2 text-center">
          Vive una experiencia única disfrutando de la variedad de cervezas y
          estilos nuevos usando productos frescos. Cervecería Code&Beer inauguró
          sus operaciones el 31 de octubre del 2014 en San Miguel de Tucuman
          Provincia de Argentina. No solo la magia, la cultura y los
          maravillosos paisajes del Valle Sagrado nos motivaron a construir en
          este lugar, sino también la gran cantidad de productos frescos y de
          alta calidad que nos permiten innovar y producir nuestras cervezas.
        </p>

        <img
          src="https://i.pinimg.com/originals/45/35/ff/4535ff6112641aea4925bc4c0cbcdec5.jpg"
          className="img-fluid mx-auto d-block mt-5 mb-5 imgNosotros img-thumbnail"
          alt="quienes somos"
        />

        <h2 className="info text-center">Mision</h2>

        <p className="py-4 fs-4 info2 text-center">
          “Brindamos al cliente una cerveza artesanal de calidad, ofreciendo
          experiencias exclusivas y diferentes, arraigadas a la esencia de la
          cultura artesanal en armonía con el medio que nos sostiene”
        </p>

        <img
          src="https://images.clarin.com/2020/08/06/variedades-de-cerveza-artesanal___LVeEtNWdb_1200x630__1.jpg"
          className="img-fluid mx-auto d-block mt-5 mb-5 imgNosotros img-thumbnail"
          alt="diferencias "
        />

        <h2 className="info text-center">Vision</h2>

        <p className="py-4 fs-4 info2 text-center">
          “Ser la cervecería artesanal líder en Tucuman, siendo reconocidos por
          la calidad, innovación permanente y sostenibilidad con el medio
          ambiente y el entorno social que nos rodea”
        </p>

        <img
          src="https://www.diariolibre.com/binrepository/1970x1024/0c0/0d0/none/10904/QLBI/cerveza-fria_15684343_20210202113055.jpg"
          className="img-fluid mx-auto d-block mt-5 mb-5 imgNosotros img-thumbnail"
          alt="nuestra vision"
        />

        <h2 className="info text-center">Valores</h2>

        <p className="py-4 fs-4 info2  text-center">
          Innovación , Calidad y Sostenibilidad
        </p>

        <img
          src="https://assets.elimparcial.com/export/sites/elimparcial/img/2020/08/07/tres-amigos-brindando-vasos-cerveza-ligera-pub_140555-33.jpg_2129848495.jpg"
          className="img-fluid mx-auto d-block mt-5 mb-5 imgNosotros img-thumbnail"
          alt="Liderazgo"
        />
      </div>

    
        <div className="accordion m-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Beber con moderacion</Accordion.Header>
              <Accordion.Body>
                Moderación significa que beber no es intoxicarse (o embriagarse)
                y que usted no consuma más de 1 trago al día si es una mujer y
                no más de 2 si es un hombre. Un trago se define como 12 onzas
                (350 mL) de cerveza.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Beneficios de beber cerveza</Accordion.Header>
              <Accordion.Body>
                Rica en vitaminas, proteínas, ácido fólico y antioxidantes,
                algunos estudios apuntan que su consumo moderado se asocia a
                beneficios cardiovasculares, de salud ósea y hasta contra la
                obesidad. Eso sí, siempre dentro de una alimentación
                equilibrada.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <Container>
            <Footer/>
        </Container>
      
    </>
  );
};

export default MainView;

