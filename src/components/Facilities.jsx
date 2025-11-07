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
    {id: 1, title: 'Atheletic Zone', img: card1, extra: false},
    {id: 2, title: 'Training Ground', img: card2, extra: true},
    {id: 3, title: 'Runing Areas', img: card3, extra: false},
    {id: 4, title: 'Tennis Courts', img: card4, extra: false},
    {id: 5, title: 'Atheletic Zone', img: card5, extra: false},
    {id: 6, title: 'Training Ground', img: card6, extra: true},
    {id: 7, title: 'Runing Areas', img: card7, extra: false},
    {id: 8, title: 'Tennis Courts', img: card8, extra: false},
    {id: 9, title: 'Atheletic Zone', img: card9, extra: false},
    {id: 10, title: 'Training Ground', img: card10, extra: true},
    {id: 11, title: 'Runing Areas', img: card11, extra: false},
    {id: 12, title: 'Tennis Courts', img: card12, extra: false},
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
                  <Card key={index} img={card.img} title={card.title} extra={card.extra}/>
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
