import React from 'react'
import "./drama.scss"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryRouteBook } from '../../constants/Data'
import {BsSearch} from 'react-icons/bs'
import {FiMenu} from "react-icons/fi"
import {HiMiniUserCircle} from "react-icons/hi2"
import { PopularDrama , TrendingNow} from '../../constants/RomanData'
import axios from 'axios'
import { useSelector } from 'react-redux'



const Drama = () => {

  const [search, setSearch] = useState('')

  const infos = useSelector((state) => state.Inf.infosUser)

  console.log(infos);

  // const [isLoggedOut, setLoggedOut] = useState(false);

//   const handleLogout = () => {

//     axios.post('http://localhost:8800/api/v1/logout', null, {
//         withCredentials : true
//     })
//     .then((respnse) => {
//         if(respnse.status === 200) {
//             // setLoggedOut(true)
//             // alert('dddd')
//         }else{
//             console.error('Echec de la deconnexion')
//         }
//     })
//     .catch((error) => {
//         console.error('erreur lors de la deconnexion', error)
//     })
//   }


  return (
    <div className="drama-grid">
      <div className='drama-part1'>      
          <div>
             <h1>Fixbook</h1>
          </div>

          <div className='drama-category'>
             <h3 className="drama-category">CATEGORY</h3>
             <div className="drama-tiret"></div>
          </div>

          <div className="drama">
            {CategoryRouteBook.map((item) => (
                    <li>
                        <Link to={item.path}>
                              {item.text}
                        </Link>
                    </li>
                  ))} 
          </div>
      </div> 
      
      <div className='drama-part2'>
          <section className='drama-infos'>
                <div className='drama-element'>
                    <BsSearch className='search-icon'/>
                    <input type="text"  placeholder='Search...' className='drama-input'
                        onChange={(even)=> setSearch(even.target.value)}  value={search}
                    />
                    <h2>{}</h2>
                </div>

                 <div className="drama-user">

                    <>
                       <Link to={"/loginUser"} style={{textDecoration:'none'}} className='drama-links'>
                         Login
                      </Link>
                    </>

                 
                    {/* <div>
                         <p onClick={handleLogout}>Logout ({})</p>
                    </div> */}
                

                    {/* 

                    <div>
                    </div> */}

                    {/* <Link className='rrrr' to={"/loginAdmin"}>ADMIN</Link> */}
                    {/* <div className='drama-users'>
                      <div className='drama-icons'>
                          <FiMenu className='icons-menu'/>
                          <HiMiniUserCircle  className='icons-user'/>
                      </div>
                        <p>Sem Elisee</p>
                    </div> */}
                  </div> 
            </section>
            
            <section className='drama-part3'>

                <div className="drama-popular">
                     <h2>Drama Popular</h2>

                    <div className='drama__populars'>
                            {PopularDrama.map((item) => (
                                <div className='drama__map_Popular'>
                                      <Link to={`/infosBook/${item.name}`}>
                                          <img src={item.image} alt="" className='drama__map'/>
                                      </Link>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="drama-popular">
                     <h2>Trending Now</h2>
                        <div className='drama__populars'>
                            {TrendingNow.map((item) =>(
                                    <div className='drama__map_Popular' >
                                        <Link to={`/tendance/${item.name}`}>
                                            <img src={item.image} alt="" className='drama__map'/>
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

export default Drama