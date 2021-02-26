import React, { useContext, createContext, useState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { ResaContext } from "../ResaContext";



const RechercheVol = () => {
  const value = useContext(ResaContext);

  //const [resa, setresa] = useContext(ResaContext);

//  let toto = useContext(ResaContext);

  const HandleTextChange = (e)=>{


    //setresa(e.target.value);

    console.log('value : ', value);
 
   // console.log(toto[0].InitialContext.arrival)

  }

  const handleSubmit= useCallback(function(value) {
    console.log(value)
  })
  return (
    <div>

      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Control
                name="departure"
                
              
                onChange={HandleTextChange}
                placeholder="Ville de départ"
              />
            </Col>
            <Col>
              <Form.Control
                name="arrival"
               // value={resa.arrival}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                placeholder="Ville d'arrivée"
              />
             
            </Col>
            <Col>
              <Form.Control
                type="date"
                name="dob"
                onChange={(e)=>{console.log(e.target)}}

              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col>
              <p>Nombre de passager(s)</p>
            </Col>
            <Col>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Control type="number" name="passenger" min="1" max="8" />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form.Group>
        <Button variant="success" >Envoyer</Button>
      </Form>
    </div>
  );
};

export default RechercheVol;
