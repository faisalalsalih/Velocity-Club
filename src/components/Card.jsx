import React from 'react'
// import demo from "../assets/tennis4.jpg"
import { GoArrowUpRight } from "react-icons/go";



const Card = ({img, extra, tag, bottomtext, extratext}) => {
  return (
    <>
      <div id="card">
        <img src={img} alt="demo" className='demo' />
        <div className="card-overlay">
          <div className="right-tag"><h6>{tag}</h6></div>

          { extra && 
           <div className="hidden-gem">
            <div className="playground">

              <div className="roundo">
              <h6>Play Ground</h6>
              </div>
              
              <div className="pointer">
                <GoArrowUpRight className='gorightup'/>
              </div>

            </div>

            <div className="final-touch">
              <h1>{extratext}</h1>
            </div>
          </div>
          }

          {!extra && 
          <div className="bottom-tag">
            <h2>{bottomtext}</h2>
          </div>
          }

          
        </div>
      </div>
    </>
  )
}

export default Card
