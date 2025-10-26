import React from 'react'
import heroimage from "../assets/Hero.jpg"
import logos from "../assets/trophy.png"
import menu from "../assets/menu.png"
import search from "../assets/search.png"
import arrow from "../assets/right-up.png"
import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.png"


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
              <div className="capsule">
                <div className="persona"><img src={person1} alt="person1" className='person1' /></div>
                <div className="persona"><img src={person2} alt="person2" className='person2' /></div>
                <div className="persona"><img src={person3} alt="person3" className='person3' /></div>
              </div>
              <div className="paragraph"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
