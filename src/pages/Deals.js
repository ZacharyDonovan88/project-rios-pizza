import React, { useState } from "react";
import "../App.css";
import "./css/menu.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';



// pop ups


const Deals = () => {
    

    return (
      <> 
        <div className="pagesSection menuBg">
            <h2>Deals</h2> 
        
        
            <div className="pagesSection">
                <div className="menuSection">
                        <div className="dealBox">
                            <div className="dealLine">
                                <h3>One Large Traditional Pizza + Garlic Bread Roll + 1.25mL Drink  -   $24</h3>
                                    <p>Save $4.50</p>
                            </div>

                            <div className="dealLine">
                                <h3>Two Large Traditional Pizza + Garlic Bread Roll  -   $38</h3>
                                    <p>Save $5.50</p>
                            </div>

                            <div>
                                <h3>Two Family Traditional Pizza + Garlic Bread Roll  -   $49</h3>
                                    <p>Save $6.50</p>
                            </div>

                        </div>
                    </div>
            </div>
        </div>    
      </>
    );
  };
  
  export default Deals;