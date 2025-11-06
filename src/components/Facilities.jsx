import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import Card from './Card';

const Facilities = () => {
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
                <Card />
            </div>

        </div>
      </section>
    </>
  )
}

export default Facilities
