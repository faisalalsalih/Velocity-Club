import React from 'react'
import swipe from "../assets/swipe.jpg"

const Swiper = () => {
  return (
    <>
      <section id='swiper'>
        <div className="heading">
          <h1>We aim to empower atheletes<br />by instilling confidence</h1>          
        </div>

        <div className="swiper-control">
          <div className="swipe1">
            <img src={swipe} alt="swipe-img1" className='swipe-img' />
            <div className="parda">
              <div className="parda1">
                <div className="circlo"></div>
                <div className="widebar"></div>
              </div>
              <div className="parda2"></div>
            </div>
          </div>
          <div className="swipe2"></div>
        </div>
      </section>
    </>
  )
}

export default Swiper
