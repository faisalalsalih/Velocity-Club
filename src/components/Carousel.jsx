import React from 'react'
import arrow from "../assets/right-up.png"

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
            <div className="carousel-2"></div>
            <div className="carousel-3"></div>
        </div>
      </section>
    </>
  )
}

export default Carousel
