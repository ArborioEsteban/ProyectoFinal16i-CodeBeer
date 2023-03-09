import React from "react";
import Button from "react-bootstrap/Button";


import "./Error.css";


const Error404 = () => {
  return (
    <body className=" container">
      <div className="text-center">
        <img
          className="Logo404 "
          src="http://www.businessenglishhq.com/wp-content/uploads/2016/11/writing-mistake-language.png"
          alt="LOGO404"
        ></img>
      </div>
      <h1 className="text-center error1">UPS! AQUI NO HAY BIRRA</h1>
      <h4 className="text-center error">
        No te preocupes, puedes seguir buscando tu favorita
      </h4>
      <div className=" my-5 butt">
        <Button className="Bc" href="/">
          Vuelve al pricipio
        </Button>
      </div>
    </body>
  );
};

export default Error404;
