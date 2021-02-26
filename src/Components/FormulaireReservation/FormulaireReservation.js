import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const FormulaireReservation = () => {
  return (
    <div>
      <Form>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Row>
              <Form.Label as="legend" column>
                Radios
              </Form.Label>
              <Form.Check
                type="radio"
                label="Monsieur"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Madame"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Form.Row>
          </Form.Group>
        </fieldset>

        <Form.Row>
          <Form.Label>Nom</Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Nom" />
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Label>Prenom</Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Prenom" />
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Label>Adresse</Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Adresse" />
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Label>Telephone</Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Telephone" />
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Label>Email</Form.Label>
          <Col>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Label>Nb bagage</Form.Label>
          </Col>
          <Col>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
        </Form.Row>

        <Button className="mt-4" href="#" variant="success" size="lg" >
          Continuer
        </Button>
      </Form>
    </div>
  );
};

export default FormulaireReservation;
