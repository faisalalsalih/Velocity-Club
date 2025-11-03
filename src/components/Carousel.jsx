import React, { useState } from 'react'
import arrow from "../assets/right-up.png"
import golf from "../assets/Roger.jpg"
import white from "../assets/white-arrow.png"
import covert from "../assets/tennis.jpg"
import covert2 from "../assets/tennis2.jpg"
import covert3 from "../assets/tennis3.jpg"
import covert4 from "../assets/tennis4.jpg"
import covert5 from "../assets/tennis5.jpg"
import { GoArrowLeft, GoArrowRight } from "react-icons/go";






const Carousel = () => {

    const images = [covert, covert2, covert3, covert4, covert5];
    const [currentindex, setcurrentindex] = useState(0);



    const handleNext = () => {
        setcurrentindex((previndex) => (previndex + 1) % images.length);
    }

    const handleprev = () => {
        setcurrentindex((previndex) => previndex === 0 ? images.length - 1 : previndex - 1)
    }


    const [ishover, setishover] = useState(false);

  return (
    <>
      <section id='carousel'>
        <div className="carousel-container">
            <div className="carousel-1">
                <div className="shatingai">
                    <a href="#center">Sports Center</a>
                </div>

                <h2>Welcome to Velocity Club,<br />where we inspire atheletes<br />and fitness enthusiasts to<br />reach new heights.</h2>

                <div className="gato">
                    <h3>Get In Touch</h3>
                    <div className="circle1"><img src={arrow} alt="arrow" className='arrow' /></div>
                </div>
            </div>
            <div className="carousel-2">
                <img src={golf} alt="golf" className='golf' />
                <div className="cover">
                    <div className="buto">
                        <h3>Outdoor area</h3>
                    </div>

                    <div className="buto2">
                        <h3>Versatile space for a wide<br />range of activities</h3>

                        <div className="blackish">
                            <img src={white} alt="white" className='white' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-3">
                <div className="show-img">
                    <img src={images[currentindex]} alt="show-img" className={`covert ${ishover ? 'scale-up' : 'scale-down'}`} />
                    <div className="loli" onMouseEnter={() => {setishover(true)}} onMouseLeave={() => {setishover(false)}}>
                        <div className="indoor">
                            <h6>indoor</h6>
                        </div>
                        <h2>Futal court</h2>
                    </div>
                </div>
                <div className="text-content">
                    <p>Explore the ideal space to play,<br />train, and reach new heights<br />Where Passion Meets</p>
                    <div className="directions">
                        <div className="left-direction" onClick={handleNext}>
                            <GoArrowLeft className='left-arrow' onClick={handleNext} />
                        </div>
                        <div className="right-direction" onClick={handleprev}>
                            <GoArrowRight className='right-arrow' onClick={handleprev}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Carousel
