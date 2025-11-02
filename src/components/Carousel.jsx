import React from 'react'
import arrow from "../assets/right-up.png"
import golf from "../assets/Roger.jpg"
import white from "../assets/white-arrow.png"
import covert from "../assets/tennis.jpg"

const Carousel = () => {
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
                    <img src={covert} alt="show-img" className='covert' />
                    <div className="loli">
                        <div className="indoor">
                            <h6>indoor</h6>
                        </div>
                        <h2>Futal court</h2>
                    </div>
                </div>
                <div className="text-content"></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Carousel
