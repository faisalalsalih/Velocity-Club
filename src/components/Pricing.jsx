import React from 'react'
import { BiCycling } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import big1 from "../assets/big1.jpg"
import big2 from "../assets/big2.jpg"



const Pricing = () => {
  return (
    <>
      <section id='pricing'>
        <div className="pricing1">
          <h1>Find The Perfect Plan For Your<br />Atheletic<span className='span-gola'><BiCycling className='cyclelogo'/></span>Journey</h1>

          <div className="right-swipe">
            <p>See More Options</p>
            <div className="swipe-logo">
              <MdKeyboardDoubleArrowRight className='swipelogo'/>
            </div>
          </div>

          <div className="dollars">
            <div className="dollars-round">
              <BsCurrencyDollar className='dollar-icon'/>
            </div>
            <div className="indicator">
              <h6>Pricing</h6>
            </div>
          </div>
        </div>



        <div className="pricing2">
          <div className="pricetag1">
            <img src={big1} alt="big1" className='big1' />
            <div className="big1">

            </div>
          </div>
          <div className="pricetag2">
            <img src={big2} alt="big2" className='big2' />
            <div className="big2">
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
