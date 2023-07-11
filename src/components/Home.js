import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./css/slide.css";
import "../App.css"


function Home() {
   
  return (
    <div className="homepage">
      <div className="col title-col">
        <h3 className="page-title">Come get your<br/>Fresh Pizza!</h3>
      </div>      
      <div class="col">
        <div className="image-container">
          <img className="image" src={require('./assets/images/homeImg.png')} alt="Fresh Pizza"/>
          <img className="animation" src={require('./assets/images/smoke.png')} alt="Steam" />
        </div>
      </div>
    </div>
  );
}

export default Home;
