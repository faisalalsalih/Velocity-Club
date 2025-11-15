import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";



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

                </div>
                <div className="indicator">
                    <h6>Team</h6>
                </div>
            </div>
        </div>
        <div className="team2">

        </div>
      </section>
    </>
  )
}

export default Team
