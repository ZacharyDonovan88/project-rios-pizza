import React, { useState } from "react";
import "../App.css";
import "./css/menu.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';



// pop ups


const Desserts = () => {
    

    return (
      <> 
        <div className="pagesSection menuBg">
            <h2>Desserts</h2> 
        
        
            <div className="pagesSection">
                <div className="menuSection">
                        <div>
                    {/* Gelati */}
                        <div className="boxMargin">
                                <a><img src={require('../components/assets/images/desserts/gelati.jpg')} alt="Gelati"/></a>
                                    <div className="productName">
                                        <a>Gelati - $5.50</a>
                                    </div>
                            </div>
                    {/* Orange Cake */}
                              <div className="boxMargin">
                                  <a><img src={require('../components/assets/images/desserts/cake.jpeg')} alt="Orange Cake"/></a>
                                      <div className="productName">
                                          <a>Orange Cake - $6</a>
                                      </div>
                              </div>
                    {/* Sticky Date */}
                              <div className="boxMargin">
                                  <a><img src={require('../components/assets/images/desserts/sticky.jpeg')} alt="Sticky Date pudding"/></a>
                                      <div className="productName">
                                          <a>Sticky Date - $6</a>
                                      </div>
                              </div>
                        

                        </div>
                    </div>
            </div>
        </div>    
      </>
    );
  };
  
  export default Desserts;