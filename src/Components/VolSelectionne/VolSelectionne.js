import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const VolSelectionne = () => {
    return (
      <div>
            VolSelectionne

            <Form >
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Control
                name="departure"
                
               value=''
                
               value ="Ville départ choisie"
              />
            </Col>
            <Col>
              <Form.Control
                name="arrival"
               // value={resa.arrival}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                value="Ville arrivée choisie "
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
                <Form.Control type="number" value="1" name="passenger" min="1" max="8" />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form.Group>

      </Form>

      </div>
    );
  };
    
    export default VolSelectionne;