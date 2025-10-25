import React from 'react'
import heroimage from "../assets/Hero.jpg"
import logos from "../assets/trophy.png"


const Hero = () => {
  return (
    <>
      <section id='hero'>
        <div className="hero-container">
          <img src={heroimage} alt="heroimage" className='hero-image' />
          <div className="overlay">
            <nav>
              <div className="links">

              </div>
            <div className="logo">
              <img src={logos} alt="logos" className='logos' />
            </div>
            <div className="lastlinks">
              
            </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
