import React, { forwardRef, useState } from 'react'
// import demo from "../assets/tennis4.jpg"
import { GoArrowUpRight } from "react-icons/go";



const Card = forwardRef(({img, extra, tag, bottomtext, extratext}, ref) => {


  const [hover, sethover] = useState(false);

  return (
    <>
      <div id="card" ref={ref}>
        <img src={img} alt="demo" className={`demo ${hover ? 'scale-up': 'scale-down'}`}/>
        <div className="card-overlay" onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}>
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
              <h1 dangerouslySetInnerHTML={{__html: extratext}}></h1>
            </div>
          </div>
          }

          {!extra && 
          <div className="bottom-tag">
            <h2 dangerouslySetInnerHTML={{__html: bottomtext}}></h2>
          </div>
          }

          
        </div>
      </div>
    </>
  )
});

export default Card
