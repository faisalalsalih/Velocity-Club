import React from 'react'
import heroimage from "../assets/Hero.jpg"
import logos from "../assets/trophy.png"
import menu from "../assets/menu.png"
import search from "../assets/search.png"
import arrow from "../assets/right-up.png"


const Hero = () => {
  return (
    <>
      <section id='hero'>
        <div className="hero-container">
          <img src={heroimage} alt="heroimage" className='hero-image' />
          <div className="overlay">
            {/* NAVBAR */}
            <nav>
              <div className="links">
                <div className="link1"><a href="#">About us</a></div>
                <div className="link2"><a href="#">Offer</a></div>
                <div className="link3"><a href="#">facilities</a></div>
                <div className="link4"><a href="#">Membership</a></div>
              </div>
            <div className="logo">
              <img src={logos} alt="logos" className='logos' />
            </div>
            <div className="lastlinks">
              <div className="foot">
                <div className="search">
                  <input type="text" placeholder='Search here...' />
                  <div className="circle1">
                    <img src={search} alt="search" className='searcho' />
                  </div>
                </div>
                <div className="book">
                  <h3>Book Now</h3>
                  <div className="circle2">
                    <img src={arrow} alt="arrow" className='arrow' />
                  </div>
                </div>
                <div className="hamburger"><img src={menu} alt="menu-icon" className='menu' /></div>
              </div>
            </div>
            </nav>
            {/* NAVBAR ENDS HERE */}
            <div className="left">
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
