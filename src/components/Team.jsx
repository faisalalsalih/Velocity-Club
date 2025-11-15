import React, { useRef, useEffect } from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";



const Team = () => {

  const teamref = useRef(null);

  let isDraging = false;

  let StartX;

  let scrollLeft;

  useEffect(() => {
    const slider = teamref.current;

    const mouseDownHandler = (e) => {
      isDraging = true;
      slider.classList.add('drag');
      StartX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    }

    const mouseMoveHandler = (e) => {
      if (!isDraging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - StartX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    }
    const mouseLeaveHandler = () => {
      isDraging = false;
      slider.classList.remove('drag');
    }

    const handlemouseUp = () => {
      isDraging = false;
      slider.classList.remove('drag');
    }

    slider.addEventListener('mousedown', mouseDownHandler);
    slider.addEventListener('mouseleave', mouseLeaveHandler);
    slider.addEventListener('mouseup', handlemouseUp);
    slider.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      slider.removeEventListener('mousedown', mouseDownHandler);
      slider.removeEventListener('mouseleave', mouseLeaveHandler);
      slider.removeEventListener('mouseup', handlemouseUp);
      slider.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, [])
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
        <div className="team2" ref={teamref}>
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
