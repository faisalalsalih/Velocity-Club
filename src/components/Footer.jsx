import React from 'react'
import { GiTennisRacket } from "react-icons/gi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <footer id='footer'>
        <div className="footer1">
            <div className="foot1">
                <div className="logesh">
                    <GiTennisRacket className='tennis-rocket'/>
                    <h3>Velocity Club</h3>
                </div>

                <div className="logo-content">
                    <h2>Your Play, Your Way-<br />Modern Sports Facilities<br />for Every Passion</h2>
                </div>

            </div>
            <div className="foot2">
                <h4>Facilities</h4>
                <ul>
                    <li><a href="#">Tennis Courts</a></li>
                    <li><a href="#">Basketballs Courts</a></li>
                    <li><a href="#">Football Fields</a></li>
                    <li><a href="#">Swimming Pool</a></li>
                    <li><a href="#">Gym & Fitness Center</a></li>
                    <li><a href="#">Multi-purpose Hall</a></li>
                    <li><a href="#">Saura & Restoration Zone</a></li>
                    <li><a href="#">Locker Room</a></li>
                </ul>
            </div>
            <div className="foot3">
                <h4>About</h4>
                <ul>
                    <li><a href="#">Our Mission</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </div>
            <div className="foot4">
                <h4>Socials</h4>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
            </div>
            <div className="foot5">
                <h4>Join us</h4>
                <div className="groups">
                    <div className="group1">
                        <input type="text" placeholder='Type Your Email...' />
                    </div>
                    <div className="group2">
                        <input type="text" placeholder='Type Your name here...' />
                    </div>
                    <div className="group3">
                        <input type="text" placeholder='Training Type...' />
                    </div>
                    <div className="group4">
                        <div className="group4a">
                            <h6>START MOVING</h6>
                        </div>
                        <div className="group4b">
                            <MdOutlineKeyboardDoubleArrowRight className='doublet-arrow'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer2">
            <p>Privacy Policy Terms</p>
            <p>All rights reserved &copy; 2025</p>
        </div>
    </footer>
    </>
  )
}

export default Footer
