import React, {useState} from 'react'
import { IoSearch } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import Card from './Card';
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card4.jpg"
import card5 from "../assets/card5.jpg"
import card6 from "../assets/card6.jpg"
import card7 from "../assets/card7.jpg"
import card8 from "../assets/card8.jpg"
import card9 from "../assets/card9.jpg"
import card10 from "../assets/card10.jpg"
import card11 from "../assets/card11.jpg"
import card12 from "../assets/card12.jpg"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";



const Facilities = () => {


  const cardData = [
  {id: 1, img: card1, extra: false, tag: 'Athletic Zone', bottomtext: 'Premium-grade Courts<br />and Fields for All Athletes'},
  {id: 2, img: card2, extra: true, tag: 'Training Ground', bottomtext: 'Elite Sports Facilities<br />for Skill and Strength', extratext: 'High-Performance Zones<br />for Focused Training'},
  {id: 3, img: card3, extra: false, tag: 'Running Track', bottomtext: 'Versatile Track Systems<br />Designed for Speed and Flow'},
  {id: 4, img: card4, extra: false, tag: 'Tennis Court', bottomtext: 'Precision Turf Courts<br />for Competitive Play'},
  {id: 5, img: card5, extra: false, tag: 'Fitness Arena', bottomtext: 'State-of-the-Art Spaces<br />for Every Athlete’s Need'},
  {id: 6, img: card6, extra: true, tag: 'Recovery Zone', bottomtext: 'Smart Recovery Spaces<br />for Post-Workout Relief', extratext: 'Hydrotherapy Pods<br />and Relaxation Lounges'},
  {id: 7, img: card7, extra: false, tag: 'Outdoor Field', bottomtext: 'Multi-Sport Grounds<br />Built for All Conditions'},
  {id: 8, img: card8, extra: false, tag: 'Youth Circuit', bottomtext: 'Safe Play Areas<br />for Young Rising Stars'},
  {id: 9, img: card9, extra: false, tag: 'Endurance Zone', bottomtext: 'Long-Distance Tracks<br />for Stamina and Power'},
  {id: 10, img: card10, extra: true, tag: 'Wellness Lounge', bottomtext: 'Relaxation Facilities<br />for Mind and Body Reset', extratext: 'Massage Suites<br />and Calm Retreats'},
  {id: 11, img: card11, extra: false, tag: 'Skill Lab', bottomtext: 'Focused Drill Stations<br />for Technique Refinement'},
  {id: 12, img: card12, extra: false, tag: 'Game Grounds', bottomtext: 'Event-Ready Fields<br />for Match-Day Action'},
]


  const [page, setpage] = useState(0);
  const cardperpage = 4;

  const startindex = page * cardperpage;
  const visiblecards = cardData.slice(startindex, startindex + cardperpage);


  const handlenext = () => {
    if(startindex + cardperpage < cardData.length){
      setpage(prev => prev + 1);
    }
  }

  const handleprev = () => {
    if(page > 0){
      setpage(prev => prev - 1);
    }
  }




  return (
    <>
      <section id='facilities'>
        <div className="facilities-container">
            <div className="search-section">
                <div className="facility">
                    <div className="facility-button">
                        <h6>Facilities</h6>
                    </div>
                    <h2>Explore Our Facilities</h2>
                </div>

                <div className="wrapper">
                <div className="search-container">
                    <input type="text" placeholder='Search here...' className='search-wala' />

                    <div className="search-circle">
                        <IoSearch className='search-icon' />
                    </div>
                </div>


                <div className="view-all">
                    <h6>View All</h6>
                    <FiArrowUpRight className='arrow-rightoo'/>
                </div>

                </div>

            </div>



            <div className="cards-section">
                {visiblecards.map((card, index) => (
                  <Card key={index} img={card.img} bottomtext={card.bottomtext} tag={card.tag} extratext={card.extratext} extra={card.extra}/>
                ))}
            </div>




            <div className="akhwa-dekhwa">
              <div className="arrowkhwa">
                <div className="boom1">
                  <GoArrowLeft className='faleft' onClick={handleprev}/>
                </div>
                <div className="boom2">
                  <GoArrowRight className='faright' onClick={handlenext}/>
                </div>
              </div>
              <div className="likai">
                <p>Reserve a court for individual paractices,team sessions,or<br />personilzed coaching to elevate your performance</p>
              </div>
            </div>

        </div>
      </section>
    </>
  )
}

export default Facilities
