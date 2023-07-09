import React from "react";
import "./css/style.css";

const Pizza = () => {
    
  
    return (
      <> 
        <div className="popArea">
            <div className="popTxtTitle">
                <div>
                    <h3>SEAFOOD</h3>
                </div>
            </div>
            <div>
                <h3>Ingredients:</h3>
            </div>
            <div className="popBox">
                <p>RIO'S SAUCE, MOZZARELLA, SQUID, TUNA, GARLIC-MARINATED PRAWNS, FRESH TOMATO, CHILLI OIL & FRESH PARSLEY</p>
            </div>
            <div>
                <h3>Prices:</h3>
            </div>
            <div className="popBox">
                <p>Large $24.50 - Family $32</p>
            </div>
        </div>
      </>
    );
  };
  
  export default Pizza;