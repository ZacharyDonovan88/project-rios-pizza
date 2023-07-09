import React from "react";
import "./css/style.css";

const Pizza = () => {
    
  
    return (
      <> 
        <div className="popArea">
            <div className="popTxtTitle">
                <div>
                    <h3>GOURMET VEG</h3>
                </div>
            </div>
            <div>
                <h3>Ingredients:</h3>
            </div>
            <div className="popBox">
                <p>RIO'S SAUCE, MOZZARELLA, SPINACH MIX, PUMPKIN, FETA, KALAMATA OLIVES, FRESH TOMATO & GARLIC</p>
            </div>
            <div>
                <h3>Prices:</h3>
            </div>
            <div className="popBox">
                <p>Large $23 - Family $30</p>
            </div>
        </div>
      </>
    );
  };
  
  export default Pizza;