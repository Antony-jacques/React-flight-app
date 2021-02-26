import React from 'react';
import NavigationBar from "../NavigationBar/NavigationBar";
import  FormulaireReservation  from '../FormulaireReservation/FormulaireReservation';
import  VolSelectionne  from '../VolSelectionne/VolSelectionne';


const PageReservation = () => {
    return (
      <div>
            PageReservation
            <div className="mt-4">
            <NavigationBar />
            </div>

            <div className="mt-4">
              <VolSelectionne/>
            </div>
            
            <div className="mt-4">
              <FormulaireReservation/>
            </div>
            
      </div>
    );
  };
    
    export default PageReservation;