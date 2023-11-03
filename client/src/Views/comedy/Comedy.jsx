import React from 'react'
import "./comedy.scss"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryRouteBook } from '../../constants/Data'
import {BsSearch} from 'react-icons/bs'
import {FiMenu} from "react-icons/fi"
import {HiMiniUserCircle} from "react-icons/hi2"
import { PopularComedy, TrendingNow } from '../../constants/RomanData'
// import { PictureRoman1, PictureRoman2 } from '../../constants/RomanData'

const Comedy = () => {

  const [search, setSearch] = useState('')

  return (
    <div className="comedy-grid">
        <div className='comedy-part1'>      
            <div>
              <h1>Fixbook</h1>
            </div>

            <div className='comedy-category'>
              <h3 className="comedy-category">CATEGORY</h3>
              <div className="comedy-tiret"></div>
            </div>

            <div className="comedy">
              {CategoryRouteBook.map((item) => (
                      <li>
                          <Link to={item.path}>
                                {item.text}
                          </Link>
                      </li>
                    ))} 
            </div>
        </div> 
        
        <div className='comedy-part2'>
            <section className='comedy-infos'>
                  <div className='comedy-element'>
                      <BsSearch className='search-icon'/>
                      <input type="text"  placeholder='Search...' className='comedy-input'
                          onChange={(even)=> setSearch(even.target.value)}  value={search}
                      />
                  </div>
                  <div className="comedy-user">
                      {/* <Link className='rrrr' to={"/loginAdmin"}>ADMIN</Link> */}
                      <div className='comedy-users'>
                        <div className='comedy-icons'>
                            <FiMenu className='icons-menu'/>
                            <HiMiniUserCircle  className='icons-user'/>
                        </div>
                          <p>Sem Elisee</p>
                      </div>
                    </div>
              </section>
              
              <section className='comedy-part3'>

                  <div className="comedy-popular">
                      <h2>Comedy Popular</h2>

                      <div className='comedy__populars'>{PopularComedy.map((item) =>(
                              <Link to={`/comedyDetails/${item.name}`}>
                                  <div className='comedy__map_Popular'>
                                      <img src={item.image} alt="" className='comedy__map'/>
                                   </div>
                              </Link>
                                
                            ))}
                      </div>
                  </div>

                  <div className="comedy-popular">
                      <h2>Trending Now</h2>
                      <div className='comedy__populars'>
                        {TrendingNow.map((item) =>(
                                <div className='comedy__map_Popular'>
                                  <Link to={`/tendance/${item.name}`}>
                                        <img src={item.image} alt="" className='comedy__map'/>
                                  </Link>
                                </div>
                      
                            ))}
                      </div>
                  </div>
              </section>       
          </div> 
  </div>
  )
}

export default Comedy