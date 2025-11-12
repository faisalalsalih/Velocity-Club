import React, { useEffect, useRef} from 'react'
import swipe from "../assets/swipe.jpg"
import badge from "../assets/badge.png"
import star1 from "../assets/star1.jpg"
import star2 from "../assets/star2.jpg"
import star3 from "../assets/star3.jpg"
import plus from "../assets/plus.png"
import { FiArrowUpRight } from "react-icons/fi";
import dialer from "../assets/Dialer.jpg"
import { FaPlus } from "react-icons/fa6";
import Profile1 from "../assets/profile1.jpg"
import Profile2 from "../assets/profile2.jpg"
import Profile3 from "../assets/profile3.jpg"
import Profile4 from "../assets/profile4.jpg"


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


    const mouseMoveHandler = (e) => {
      if (!isDraging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const mouseLeaveHandler = () => {
      isDraging = false;
      slider.classList.remove('dragging');
    };

    const mouseUpHandler = () => {
      isDraging = false;
      slider.classList.remove('dragging');
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
            <div className="swipe2a">
              <div className="dial">
                <img src={dialer} alt="dialer" className='dialer' />
                <div className="dialer-overlay">
                  <div className="cross-round">
                    <FaPlus className='faplus'/>
                  </div>
                  <h1>Comprehensive<br />Solutions</h1>
                </div>
              </div>

              <div className="details1">
                <img src={Profile1} alt="details1-pic" className='details1-pic' />
                <div className="details-overlay">
                  <div className="patta">
                    <div className="circular-sphere">
                      <FaPlus className='faplus'/>
                    </div>

                    <div className="profile-circle">
                      <img src={Profile2} alt="player2-pic" className='player2-pic' />
                    </div>
                  </div>
                  <div className="satta">
                    <h1>Enjoy<br /> Every Short</h1>
                  </div>
                </div>
              </div>
              <div className="details2">
                <img src={Profile3} alt="details3-pic" className='details3-pic'/>
                <div className="details-overlay">
                  <div className="patta">
                    <div className="circular-sphere">
                      <FaPlus className='faplus'/>
                    </div>

                    <div className="profile-circle">
                      <img src={Profile4} alt="player4-pic" className='player4-pic' />
                    </div>
                  </div>

                  <div className="satta">
                    <h1>Attention<br /> to Details</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="swipe2b">
              <h2>Providing Personilzed training to help<br />atheletes reach peak performance<br />and transform their potential</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Swiper
