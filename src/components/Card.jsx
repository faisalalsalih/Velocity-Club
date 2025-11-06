import React from 'react'
import demo from "../assets/tennis4.jpg"
import { GoArrowUpRight } from "react-icons/go";



const Card = () => {
  return (
    <>
      <div id="card">
        <img src={demo} alt="demo" className='demo' />
        <div className="card-overlay">
          <div className="right-tag"><h6>athelete zone</h6></div>
          <div className="hidden-gem">
            <div className="playground">

              <div className="roundo">
              <h6>Play-ground</h6>
              </div>
              
              <div className="pointer">
                <GoArrowUpRight className='gorightup'/>
              </div>

            </div>

            <div className="final-touch">
              <h1>Top-Tier Sports<br />Facilities for training</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
