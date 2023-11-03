import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryRouteBook } from '../../constants/Data'
import {BsSearch} from 'react-icons/bs'
import {FiMenu} from "react-icons/fi"
import {HiMiniUserCircle} from "react-icons/hi2"
import "./action.scss"
import { PopularAction, TrendingNow } from '../../constants/RomanData'
// import { PictureRoman1, PictureRoman2 } from '../../constants/RomanData'

const Action = () => {


  // const filteredData = PopularAction.filter((el) =>
  //   el.name.toLowerCase().includes(search.toLowerCase())
  // );

  const [search, setSearch] = useState('')

  return (
    <div className="action-grid">
        <div className='action-part1'>      
            <div>
              <h1>Fixbook</h1>
            </div>

            <div className='action-category'>
              <h3 className="action-category">CATEGORY</h3>
              <div className="action-tiret"></div>
            </div>

            <div className="action">
              {CategoryRouteBook.map((item) => (
                      <li>
                          <Link to={item.path}>
                                {item.text}
                          </Link>
                      </li>
                    ))} 
            </div>
        </div> 
        
        <div className='action-part2'>
            <section className='action-infos'>
                  <div className='action-element'>
                      <BsSearch className='search-icon'/>
                      <input type="text"  placeholder='Search...' className='action-input'
                          onChange={(even)=> setSearch(even.target.value)}  value={search}
                      />
                  </div>
                  <div className="action-user">
                      {/* <Link className='rrrr' to={"/loginAdmin"}>ADMIN</Link> */}
                      {/* <Link to={"/loginUser"} style={{textDecoration:'none'}} className='actions-links'>
                        Login
                    </Link> */}
                      {/* <div className='action-users'>
                        <div className='action-icons'>
                            <FiMenu className='icons-menu'/>
                            <HiMiniUserCircle  className='icons-user'/>
                        </div>
                          <p>Sem Elisee</p>
                      </div> */}
                    </div>
              </section>
              
              <section className='action-part3'>
                  <div className="action-popular">
                        <h2>Action Popular</h2>

                        <div className='action__populars'>{PopularAction.map((item) =>(
                              <Link to={`/actionDetails/${item.name}`}>
                                  <div className='action__map_Popular'>
                                      <img src={item.image} alt="" className='action__map'/>
                                  </div>
                              </Link>       
                              ))}
                        </div>
                  </div>

                  <div className="action-popular">
                      <h2>Trending Now</h2>

                      <div className='action__populars'>
                        {TrendingNow.map((item) =>(
                                <div className='action__map_Popular'>
                                  <Link to={`/tendance/${item.name}`}>
                                        <img src={item.image} alt="" className='action__map'/>
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

export default Action