import React, { useEffect, useRef} from 'react'
import swipe from "../assets/swipe.jpg"
import badge from "../assets/badge.png"
import star1 from "../assets/star1.jpg"
import star2 from "../assets/star2.jpg"
import star3 from "../assets/star3.jpg"
import plus from "../assets/plus.png"
import { FiArrowUpRight } from "react-icons/fi";


const Swiper = () => {

  const scrollRef = useRef(null);
  let isDraging = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const slider = scrollRef.current;

    const mouseDownHandler = (e) => {
      isDraging = true;
      slider.classList.add('dragging');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft; 
    };

    const mouseLeaveHandler = () => {
      isDraging = false;
      slider.classList.remove('dragging');
    };

    const mouseUpHandler = () => {
      isDraging = false;
      slider.classList.remove('dragging');
    };

    const mouseMoveHandler = (e) => {
      if (!isDraging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };


    slider.addEventListener('mousedown', mouseDownHandler);
    slider.addEventListener('mouseleave', mouseLeaveHandler);
    slider.addEventListener('mouseup', mouseUpHandler);
    slider.addEventListener('mousemove', mouseMoveHandler);


    return () => {
      slider.removeEventListener('mousedown', mouseDownHandler);
      slider.removeEventListener('mouseleave', mouseLeaveHandler);
      slider.removeEventListener('mouseup', mouseUpHandler);
      slider.removeEventListener('mousemove', mouseMoveHandler);
    }
  },[])

  return (
    <>
      <section id='swiper'>
        <div className="heading">
          <h1>We aim to empower atheletes<br />by instilling confidence</h1>          
        </div>

        <div className="swiper-control" ref={scrollRef}>
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
              <div className="parda2">
                <div className="parda2a">
                  <h1>Experience</h1>
                  <p>Our Coaching Staff has<br />over 12 years of<br />experience</p>
                </div>
                <div className="parda2b">
                  <div className="roundooo">
                    <FiArrowUpRight className='arrowrightoo'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swipe2">
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Swiper
