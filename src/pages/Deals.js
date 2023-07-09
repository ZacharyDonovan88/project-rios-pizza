import React, { useState, useEffect} from "react";
import "../App.css";
import "../components/css/slide.css";
import "./css/menu.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';



// pop ups


const Deals = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    // js for slideshow

//setTimeout(showSlides(slideIndex), 2000);
// showSlides(slideIndex);

useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 9000);
    return () => clearInterval(intervalId);
  }, [slideIndex]);

// Next/previous controls
function prev() {
  //showSlides(slideIndex + 1);
  if (slideIndex === 0) return;
  setSlideIndex(slideIndex - 1);
}
function next() {
    if (slideIndex === 2) {
        setSlideIndex(0)
    } else {
        setSlideIndex(slideIndex + 1)
    }
}

// Thumbnail image controls
function currentSlide(n) {
  //showSlides(slideIndex = 1);
  setSlideIndex(n);
}
useEffect(() => {
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex].classList.add("active");
}, [slideIndex]);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {setSlideIndex(1)}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
    

return (
    <> 
        <div className="pagesSection menuBg">
            <h2>Deals</h2> 
        
        
            <div className="pagesSection">
                <div className="menuSection dealContainer">
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
                    <div className="slideshow-container">
                        <div className="slideshowBox">
                            <div className={`${slideIndex === 0 ? 'showMySlides' : 'mySlides'} fade`}>
                                <div className="numbertext">1 / 3</div>
                                    <img src={require('../components/assets/images/freshPizza.jpg')} style={{width:'100%'}} alt="Fresh Pizza"/>
                                </div>

                                <div className={`${slideIndex === 1 ? 'showMySlides' : 'mySlides'} fade`}>
                                    <div className="numbertext">2 / 3</div>
                                        <img src={require('../components/assets/images/deals.jpg')} style={{width:'100%'}} alt="Deals"/>
                                    </div>

                                <div className={`${slideIndex === 2 ? 'showMySlides' : 'mySlides'} fade`}>
                                    <div className="numbertext">3 / 3</div>
                                        <img src={require('../components/assets/images/signup.jpg')} style={{width:'100%'}} alt="Signup"/>
                                </div>

                                    <a className="prev" onClick={prev}>&#10094;</a>
                                    <a className="next" onClick={next}>&#10095;</a>
                            </div>

                            <div style={{textAlign:'center'}}>
                                <span className="dot" onClick={() => currentSlide(0)}></span>
                                <span className="dot" onClick={() => currentSlide(1)}></span>
                                <span className="dot" onClick={() => currentSlide(2)}></span>
                            </div>
                    </div>
        </div>    
      </>
    );
  };
  
  export default Deals;