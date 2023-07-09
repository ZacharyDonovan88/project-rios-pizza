import React, { useState } from "react";
import "../App.css";
import "./css/menu.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';



// pop ups


const Drinks = () => {
    

    return (
      <> 
        <div className="pagesSection menuBg">
            <h2>Drinks</h2> 
        
        
            <div className="pagesSection">
                <div className="menuSection">
                        <div>
                        
                    {/* Coke 1.25mL */}
                        <div className="boxMargin">
                                <a><img src={require('../components/assets/images/drinks/coke.jpg')} alt="Coke 1.25mL"/></a>
                                    <div className="productName">
                                        <a>Coke 1.25mL - $4.50</a>
                                    </div>

                    {/* Diet coke 1.25mL */}
                            </div>
                              <div className="boxMargin">
                                  <a><img src={require('../components/assets/images/drinks/dietCoke.jpg')} alt="Diet Coke 1.25mL"/></a>
                                      <div className="productName">
                                          <a>Diet Coke 1.25mL - $4.50</a>
                                      </div>
                              </div>

                    {/* Fanta 1.25mL */}
                              <div className="boxMargin">
                                  <a><img src={require('../components/assets/images/drinks/fanta.jpg')} alt="Fanta 1.25mL"/></a>
                                      <div className="productName">
                                          <a>Fanta 1.25mL - $4.50</a>
                                      </div>
                              </div>

                    {/* Solo 1.25mL */}
                              <div className="boxMargin">
                                  <a><img src={require('../components/assets/images/drinks/solo.jpg')} alt="Solo 1.25mL"/></a>
                                      <div className="productName">
                                          <a>Solo 1.25mL - $4.50</a>
                                      </div>
                              </div>

                    {/* Sprite 1.25mL */}
                    <div className="boxMargin">
                                  <a><img src={require('../components/assets/images/drinks/sprite.jpg')} alt="Sprite 1.25mL"/></a>
                                      <div className="productName">
                                          <a>Sprite 1.25mL - $4.50</a>
                                      </div>
                              </div>

                    {/* Coke can */}
                    <div className="boxMargin">
                                  <a><img src={require('../components/assets/images/drinks/cokeCan.jpg')} alt="Coke Can"/></a>
                                      <div className="productName">
                                          <a>Coke can - $2</a>
                                      </div>
                              </div>

                    {/* Coke can */}
                    <div className="boxMargin">
                                  <a><img src={require('../components/assets/images/drinks/lemonCan.jpg')} alt="Lemonade Can"/></a>
                                      <div className="productName">
                                          <a>Lemonade can - $2</a>
                                      </div>
                              </div>
                        
                        </div>
                    </div>
            </div>
        </div>    
      </>
    );
  };
  
  export default Drinks;