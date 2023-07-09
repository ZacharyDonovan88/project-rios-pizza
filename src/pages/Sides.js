import React, { useState } from "react";
import "../App.css";
import "./css/menu.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';



// pop ups


const Sides = () => {
    

    return (
      <> 
        <div className="pagesSection menuBg">
            <h2>Sides</h2> 
        
        
            <div className="pagesSection">
                <div className="menuSection">
                        <div>
                        <div className="boxMargin">
                                <a><img src={require('../components/assets/images/sides/gb.jpg')} alt="Garlic Bread"/></a>
                                    <div className="productName">
                                        <a>Garlic Bread - $4.50</a>
                                    </div>
                            </div>
                              <div className="boxMargin">
                                  <a><img src={require('../components/assets/images/sides/gbPizza.jpg')} alt="Cheesy Garlic Pizza"/></a>
                                      <div className="productName">
                                          <a>Cheesy Garlic Pizza- $7.50</a>
                                      </div>
                              </div>

                        </div>
                    </div>
            </div>
        </div>    
      </>
    );
  };
  
  export default Sides;