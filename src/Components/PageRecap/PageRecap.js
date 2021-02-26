import React from "react";
import Button from "react-bootstrap/Button";

import NavigationBar from "../NavigationBar/NavigationBar";
import VolSelectionne from "../VolSelectionne/VolSelectionne";
import FormulaireReservation from "../FormulaireReservation/FormulaireReservation";

const PageRecap = () => {
  return (
    <div>
      PageRecap
      <NavigationBar />
      <VolSelectionne />
      <FormulaireReservation />
      <div className="mt-4">
        <Button variant="warning" size="lg" >
          Modifier
        </Button>{" "}
        <Button href="#" variant="danger" size="lg" >
          Annuler
        </Button>
      </div>
    </div>
  );
};

export default PageRecap;
