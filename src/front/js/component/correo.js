import React from "react";
import {Form, Button, Input, InputGroup, Col } from "reactstrap";

import "../../styles/correo.css";

const Correo = (props) => {
  console.log("here");
  const [email, setEmail] = React.useState("");
  const [texto, setTexto] = React.useState(false);

  const Suscribir = (ev) => {
    ev.preventDefault();

    if(email){
      setTexto(true)
      setTimeout(() => {
        setTexto(false)
      }, 2000);
    }
    
  };

  return (
    <div className="footer mt-auto py-3 text-center color">
      <p className="mt-3 pt-5">
        Ingresa tu correo para recibir Ofertas, Promociones y más!
      </p>
      <Form onSubmit={Suscribir}>
        <Col className="col-md-6 offset-md-3">
          <InputGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Dirección de correo electrónico"
              onChange={(ev) => setEmail(ev.currentTarget.value)}
            />
            <Button>Suscribir</Button>
          </InputGroup>
        </Col>
      </Form>
      { 
      texto && (
          <h5 className="">Gracias por suscribirte!!</h5>
      )
   }
    </div>
  );
};

export default Correo;
