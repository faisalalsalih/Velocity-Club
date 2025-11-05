import React, { useState } from 'react'
import { IoMdTrophy } from "react-icons/io";
import player1 from "../assets/player1.jpg"
import player2 from "../assets/player2.jpg"
import player3 from "../assets/player3.jpg"
import player4 from "../assets/player4.jpg"
import player5 from "../assets/player5.jpg"
import arrowimg from "../assets/right-up.png"
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


const Discover = () => {


  const allimages = [player1, player2, player3, player4, player5];

  const [currentIndex, setcurrentindex] = useState(0);


  const handlenext = () => {
    setcurrentindex((previndex) => (previndex + 1) % allimages.length);
  }


  const handleprev = () => {
    setcurrentindex((previndex) => previndex === 0 ? allimages.length - 1 : previndex - 1);
  }



  
  

  return (
    <>
      <section id="discover">
        <div className="discover-container">
            <div className="discover-1">
                <div className="discover-1a">
                    <div className="big-black"><IoMdTrophy className='troph' /></div>
                    <div className="all-links">
                        <div className="linki1"><a href="#Competition">Competition</a></div>
                        <div className="linki2"><a href="#Training">Training</a></div>
                        <div className="linki3"><a href="#friendly-match">Friendly match</a></div>
                    </div>
                </div>

                <div className="discover-1b">
                  <div className="discovery1">
                    <img src={allimages[currentIndex]} alt="all images" className='all-images' />
                  </div>
                  <div className="discovery2">
                    <h1>We provide premium<br />courts for both individual<br />and group training</h1>
                    <p>Our advanced sports facilities boast diverse<br />courts and fields for every athelete.</p>
                    <div className="discovery-button">
                      <h6>Book a Court</h6>
                      <div className="discovery-circle">
                        <img src={arrowimg} alt="arrowimg" className='arrow-img' />
                      </div>
                    </div>



                    <div className="counters">
                      <div className="counter1">
                        <h2>{currentIndex + 1} / 5</h2>
                      </div>

                      <div className="counter2">
                        <div className="leftarrow">
                          <GoArrowLeft className='lefto' onClick={handleprev} />
                        </div>
                        <div className="rightarrow">
                          <GoArrowRight className='righto' onClick={handlenext}/>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
            </div>
            <div className="discover-2"></div>
        </div>
      </section>
    </>
  )
}

export default Discover
