import React from 'react'
import swipe from "../assets/swipe.jpg"
import badge from "../assets/badge.png"
import star1 from "../assets/star1.jpg"
import star2 from "../assets/star2.jpg"
import star3 from "../assets/star3.jpg"
import plus from "../assets/plus.png"

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
                <div className="circlo">
                  <img src={badge} alt="badge" className='badge' />
                </div>
                <div className="widebar">
                  <div className="widebar1">
                    <div className="image-roller1"><img src={star1} alt="star1" className='star1' /></div>
                    <div className="image-roller2"><img src={star2} alt="star2" className='star2' /></div>
                    <div className="image-roller3"><img src={star3} alt="star3" className='star3' /></div>
                  </div>
                  <div className="widebar2">
                    <img src={plus} alt="plus" className='suss' />
                  </div>
                </div>
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
