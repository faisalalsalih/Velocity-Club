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
            <div className="logo">
              <img src={logos} alt="logos" className='logos' />
            </div>
            <nav id='navbar'>
              <div className="navbar1">
                <div className="list1"><a href="#">About Us</a></div>
                <div className="list2"><a href="#">Offer</a></div>
                <div className="list3"><a href="#">facilities</a></div>
                <div className="list4"><a href="#">Membership</a></div>
              </div>
              <div className="navbar2"></div>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
