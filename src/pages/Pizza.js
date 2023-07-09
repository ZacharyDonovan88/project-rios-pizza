import React, { useState } from "react";
import "../App.css";
import "./css/menu.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';


// pop ups
import Pep from "./popUpPages/Pep.js";
import Marg from "./popUpPages/Marg.js";
import Meat from "./popUpPages/Meat.js";
import Sup from "./popUpPages/Sup.js";
import Veg from "./popUpPages/Veg.js";
import Chick from "./popUpPages/Chick.js";
import CChick from "./popUpPages/CChick.js";
import GVeg from "./popUpPages/GVeg.js";
import Sea from "./popUpPages/Sea.js";
import Prawn from "./popUpPages/Prawn.js";

const Pizza = () => {
    

    const [showPep, setShowPep] = useState(false);
    const togglePep = () => {
      setShowPep(!showPep);
    };
  
    const [showMarg, setShowMarg] = useState(false);
    const toggleMarg = () => {
        setShowMarg(!showMarg);
    };
    
    const [showMeat, setShowMeat] = useState(false);
    const toggleMeat = () => {
        setShowMeat(!showMeat);
    };

    const [showSupreme, setShowSupreme] = useState(false);
    const toggleSupreme = () => {
        setShowSupreme(!showSupreme);
    };

    const [showVeg, setShowVeg] = useState(false);
    const toggleVeg = () => {
        setShowVeg(!showVeg);
    };

    const [showChick, setShowChick] = useState(false);
    const toggleChick = () => {
        setShowChick(!showChick);
    };

    const [showCChick, setShowCChick] = useState(false);
    const toggleCChick = () => {
        setShowCChick(!showCChick);
    };

    const [showGVeg, setShowGVeg] = useState(false);
    const toggleGVeg = () => {
        setShowGVeg(!showGVeg);
    };

    const [showSea, setShowSea] = useState(false);
    const toggleSea = () => {
        setShowSea(!showSea);
    };

    const [showPrawn, setShowPrawn] = useState(false);
    const togglePrawn = () => {
        setShowPrawn(!showPrawn);
    };
      

    return (
      <> 
        <div className="pagesSection menuBg">
            <h2>Traditional Pizza</h2> 
        
        
            <div className="pagesSection">
                <div className="menuSection">
                        <div>

                        {/* Pepperoni  */}
                            <div className="boxMargin">
                                <a onClick={togglePep}><img src={require('../components/assets/images/pizza/pep.jpg')} alt="Pepperoni Pizza"/></a>
                                    <div className="productName">
                                        <a onClick={togglePep}>Pepperoni</a>
                                    </div>
                            </div>
                            {showPep && <Pep onClose={togglePep} />}


                        {/* Margherita */}
                            <div className="boxMargin">
                                <a onClick={toggleMarg}><img src={require('../components/assets/images/pizza/mar.jpg')} alt="Margherita Pizza"/></a>
                                    <div className="productName">
                                        <a onClick={toggleMarg}>Margherita</a>
                                    </div>
                            </div>
                            {showMarg && <Marg onClose={toggleMarg} />}

                        {/* All Meat */}
                            <div className="boxMargin">
                                <a onClick={toggleMeat}><img src={require('../components/assets/images/pizza/meat.jpg')} alt="All Meat Pizza"/></a>
                                    <div className="productName">
                                        <a onClick={toggleMeat}>All Meat</a>
                                    </div>
                            </div>
                            {showMeat && <Meat onClose={toggleMeat} />}

                        {/* Supreme */}
                            <div className="boxMargin">
                                <a onClick={toggleSupreme}><img src={require('../components/assets/images/pizza/sup.jpg')} alt="Supreme Pizza"/></a>
                                    <div className="productName">
                                        <a onClick={toggleSupreme}>Supreme</a>
                                    </div>
                            </div>
                            {showSupreme && <Sup onClose={toggleSupreme} />}

                        {/* Vegetarian */}
                            <div className="boxMargin">
                                <a onClick={toggleVeg}><img src={require('../components/assets/images/pizza/veg.jpg')} alt="Vegetarian Pizza"/></a>
                                    <div className="productName">
                                        <a onClick={toggleVeg}>Vegetarian</a>
                                    </div>
                            </div>
                            {showVeg && <Veg onClose={toggleVeg} />}
                        
                        {/* Chicken */}
                            <div className="boxMargin">
                                <a onClick={toggleChick}><img src={require('../components/assets/images/pizza/chick.jpg')} alt="Chicken Pizza"/></a>
                                    <div className="productName">
                                        <a onClick={toggleChick}>Chicken</a>
                                    </div>
                            </div>
                            {showChick && <Chick onClose={toggleChick} />}

                        </div>
                    </div>
            </div>
        </div>
            <div className="pagesSection menuBg">
            <h2>Gourmet Pizza</h2> 
        
            <div className="pagesSection">
                <div className="menuSection">
                        <div>

                        {/* Cream Chicken */}
                            <div className="boxMargin">
                                <a onClick={toggleCChick}><img src={require('../components/assets/images/pizza/cream.jpg')} alt="Cream Chicken Pizza"/></a>
                                    <div className="productName">
                                        <a onClick={toggleCChick}>Cream Chicken</a>
                                    </div>
                            </div>
                            {showCChick && <CChick onClose={toggleCChick} />}

                        {/* Gourmet Veg */}
                            <div className="boxMargin">
                                <a onClick={toggleGVeg}><img src={require('../components/assets/images/pizza/gveg.jpg')} alt="Gourmet Veg Pizza"/></a>
                                    <div className="productName">
                                        <a onClick={toggleGVeg}>Gourmet Veg</a>
                                    </div>
                            </div>
                            {showGVeg && <GVeg onClose={toggleGVeg} />}

                        {/* Seafood */}
                            <div className="boxMargin">
                                <a onClick={toggleSea}><img src={require('../components/assets/images/pizza/sea.jpg')} alt="Seafood Pizza"/></a>
                                    <div className="productName">
                                        <a onClick={toggleSea}>Seafood</a>
                                    </div>
                            </div>
                            {showSea && <Sea onClose={toggleSea} />}

                        {/* Prawn Special */}
                            <div className="boxMargin">
                                <a onClick={togglePrawn}><img src={require('../components/assets/images/pizza/prawn.jpg')} alt="Prawn Special Pizza"/></a>
                                    <div className="productName">
                                    <a onClick={togglePrawn}>Prawn Special</a>
                                    </div>
                            </div>
                            {showPrawn&& <Prawn onClose={togglePrawn} />}
                        </div>
                    </div>
            </div>
        </div>    
      </>
    );
  };
  
  export default Pizza;