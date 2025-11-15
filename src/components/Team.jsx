import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";



const Team = () => {
  return (
    <>
      <section id='team'>
        <div className="team1">
            <h2>Meet the dedicated team</h2>
            <div className="team-button">
                <h6>Read More</h6>
                <div className="gerao">
                    <RiArrowRightUpLine className='arrow-rightup'/>
                </div>
            </div>

            <div className="dollars">
                <div className="dollars-round">
                  <FaUserGroup className='dollar-icon'/>
                </div>
                <div className="indicator">
                    <h6>Team</h6>
                </div>
            </div>
        </div>
        <div className="team2">
          <div className="pager1"></div>
          <div className="pager2"></div>
          <div className="pager3"></div>
          <div className="pager1"></div>
          <div className="pager2"></div>
          <div className="pager3"></div>
        </div>
      </section>
    </>
  )
}

export default Team
