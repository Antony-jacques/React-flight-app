import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";

import Homepage from "./Components/HomePage/Homepage";

import React, { useState } from "react";
import { UserContext } from "./Components/UserContext";

import { ResaProvider } from "./Components/ResaContext";
import PageReservation from "./Components/PageReservation/PageReservation";
import PageRecap from "./Components/PageRecap/PageRecap";



function App() {
  const checkPageChoice = (e) => {
    console.log("la target ", e.target.id);

    let val = e.target.id;
    switch (val) {
      case "PageReservation":
        setCheckPageReservation(!checkPageReservation);
        break;
      case "PageRecap":
        setCheckPageRecap(!checkPageRecap);
        break;
      case "Homepage":
        setcheckHomepage(!checkHomepage);
        break;
      case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
      case "Mangoes":
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
      default:
        console.log("Sorry, ");
    }

    /*
    if(e.target.id === 'PageReservation'){
      setCheckPageReservation(!checkPageReservation);
    }
    */
  };

  const [checkPageReservation, setCheckPageReservation] = useState(false);
  const [checkPageRecap, setCheckPageRecap] = useState(false);
  const [checkHomepage, setcheckHomepage] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {/*
            <FirstDepartureCity.Provider value={defaultDepartureCity}>
        */}
        <ResaProvider>
          <Form.Group controlId="PagecCheckbox">
            Choisir la page à afficher
            <Form.Check
              checked={checkPageReservation}
              onClick={checkPageChoice}
              type="checkbox"
              label="Page de réservation"
              id="PageReservation"
            />
            <Form.Check
              checked={checkPageRecap}
              onClick={checkPageChoice}
              type="checkbox"
              label="Page Recap de la réservation"
              id="PageRecap"
            />
            <Form.Check
              checked={checkHomepage}
              onClick={checkPageChoice}
              type="checkbox"
              label="Accueil"
              id="Homepage"
            />
          </Form.Group>

          {checkPageReservation ? (
            <div>
              <PageReservation />
            </div>
          ) : (
            <div></div>
          )}

          {checkPageRecap ? (
            <div>
              <PageRecap />
            </div>
          ) : (
            <div></div>
          )}

          {checkHomepage ? (
            <div>
              <Homepage />
            </div>
          ) : (
            <div></div>
          )}
        </ResaProvider>
        {/*
               </FirstDepartureCity.Provider>
           */}
      </header>
    </div>
  );
}

export default App;
