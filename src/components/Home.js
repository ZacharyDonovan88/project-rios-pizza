import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./css/slide.css";
import "../App.css"




// end of js slide


function Home() {
   

  return (
    <>
    <div className="">  
      {/* <div className="header">
        <div className="headerBg">
          <h1>Rios Pizza</h1>
        </div>
      </div> */}
    </div>
    <div>
      <div className="homeBg"> 
        <div className="homeImg pizza-image">
          <div className="homeText">
            <h3>Come get your Fresh Pizza!</h3>
          </div>
            <div className="homePizzaImg">
              <img src={require('./assets/images/homeImg.png')} alt="Fresh Pizza"/>
            </div>
            <div>
              {/* <img class="steam-animation" src={require('./assets/images/steam.png')} alt="Steam" /> */}
              <img class="steam-animation" src={require('./assets/images/smoke.png')} alt="Steam" />
            </div>
        </div>
      </div>
    </div>
      

    </>
  );
}

export default Home;
