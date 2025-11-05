import React from 'react'
import { IoMdTrophy } from "react-icons/io";

const Discover = () => {
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
            </div>
            <div className="discover-2"></div>
        </div>
      </section>
    </>
  )
}

export default Discover
