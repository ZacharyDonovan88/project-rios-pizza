import React from "react";
import "./css/style.css";

const Pizza = () => {
    
  
    return (
      <> 
        <div className="popArea">
            <div className="popTxtTitle">
                <div>
                    <h3>PEPPERONI</h3>
                </div>
            </div>
            <div>
                <h3>Ingredients:</h3>
            </div>
            <div className="popBox">
                <p>RIO'S SAUCE, MOZZARELLA WITH LOTS OF TASTY PEPPERONI</p>
            </div>
            <div>
                <h3>Prices:</h3>
            </div>
            <div className="popBox">
                <p>Large $19.50 - Family $25.50</p>
            </div>
        </div>
      </>
    );
  };
  
  export default Pizza;