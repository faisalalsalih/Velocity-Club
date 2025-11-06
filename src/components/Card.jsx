import React from 'react'
import demo from "../assets/tennis4.jpg"
import { GoArrowUpRight } from "react-icons/go";



const Card = ({title, img, extra}) => {
  return (
    <>
      <div id="card">
        <img src={demo} alt="demo" className='demo' />
        <div className="card-overlay">
          <div className="right-tag"><h6>athelete zone</h6></div>

          { extra && 
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
          }

          {!extra && 
          <div className="bottom-tag">
            <h2>State of the Art courts<br />and Fields for All Atheletes</h2>
          </div>
          }

          
        </div>
      </div>
    </>
  )
}

export default Card
