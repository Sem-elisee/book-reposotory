import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryRouteBook } from '../../constants/Data'
import {BsSearch} from 'react-icons/bs'
import {FiMenu} from "react-icons/fi"
import {HiMiniUserCircle} from "react-icons/hi2"


import "./others.scss"
import { OtherData } from '../../constants/OthersData'
// import { Data } from '../../constants/Donnee.Js'

const Others = () => {

  const [search, setSearch] = useState('')

  const [visibleItems, setVisibleItems] = useState(14);

  const handleMoreClick = () => {
    setVisibleItems(visibleItems + 7); 
  };

  const filteredData = OtherData.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="others-grid">
        <div className='others-part1'>      
            <div>
              <h1>Fixbook</h1>
            </div>

            <div className='others-category'>
              <h3 className="others-category">CATEGORY</h3>
              <div className="others-tiret"></div>
            </div>

            <div className="others">
              {CategoryRouteBook.map((item) => (
                      <li>
                          <Link to={item.path}>
                                {item.text}
                          </Link>
                      </li>
                    ))} 
            </div>
        </div> 
        
        <div className='others-part2'>
            <section className='others-infos'>
                  <div className='others-element'>
                      <BsSearch className='search-icon'/>
                      <input type="text"  placeholder='Search...' className='others-input'
                          onChange={(even)=> setSearch(even.target.value)}  value={search}
                      />
                  </div>
                  <div className="others-user">
                    </div>
              </section>
              
                  <div className="others-popular">
                      <h2>All Book</h2>
                  </div>
              <section className='others-part3'>


                  <div className="others-popular">
                      <div className='others__populars'>
                        {filteredData.slice(0, visibleItems).map((el) =>(
                            <div className='others__map_Popular'>
                            <Link to={`/OthersDetails/${el.name}`}>
                                  <img src={el.img} alt="" className='others__map'/>
                            </Link>
                          </div>
                        ))}

                      </div>
                      <div className='butt_more'>
                          {visibleItems < filteredData.length && (
                            <button onClick={handleMoreClick} className='more'>More</button>
                          )}
                      </div>
                  </div>
              </section>       
          </div> 
  </div>
  )
}

export default Others