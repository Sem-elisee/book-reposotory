import React from 'react'
import './parametre.scss'
import { useState } from 'react'
import { AdministrationData } from '../../constants/Data'
import {IoMenu} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {BiLogOut} from 'react-icons/bi'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import TextField from "@mui/material/TextField";



const Parametre = () => {

    const [isOpen,setisOpen] = useState(true)
    const [logout,setLogout] = useState(true)

    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    
    // const [editProfile,setEditProfile] = useState(false)

    const toggle = () =>{
      setisOpen(!isOpen)
      // console.log(isOpen);
    }

    const handleClickLogout = () => {
        setLogout(!logout)
        console.log(logout);
    }

    // const handlProfile = () =>{
    //   setEditProfile(!editProfile)
    //   console.log(editProfile);
    // }


  return (
    <section className='parametre' style={{gridTemplateColumns: isOpen?'14.3rem auto':'4rem auto'}}>
            <div className="parametre_link">
              <div className="parametre_title">
                  <h1 style={{display: isOpen? 'block':'none'}}>FixBook</h1>
                  <IoMenu className='parametre_icons' onClick={toggle} style={{position: !isOpen && 'relative', left:'1rem'}}/>
            </div>
              <div>
                    {AdministrationData.map((item) =>(
                      <div className='parametre_routes' key={item.path}>
                            <Link to={item.path}>
                                <div className='parametre_routes_all' style={{position: !isOpen && 'relative', top:'3rem',}}>
                                  <div style={{marginLeft: !isOpen && '-8px'}}>
                                    {item.icons}
                                  </div>
                                    <div style={{display: isOpen? 'block':'none',}}>
                                        {item.text} 
                                    </div>
                                </div>
                            </Link>
                      </div>
                    ))}
            </div> 
        </div>
        <div className='parametre_section_one'>
              <div className="parametre_logout">
                  <div className="infosadmin_element_admin">
                     <p className='infosadmin_P'>Salut, bienvenu dans votre espace.</p>
                     <p className='infosadmin_P'>ID : 467494-393</p>       
                  </div>

                  <div>
                   {!logout &&
                          <>
                          <div className='element'>
                                <p>Sem</p>
                                <MdKeyboardArrowUp className='infosadmin_icons_arrow1' onClick={handleClickLogout}/> 
                          </div>
                           

                          <div className="infosadmin_box_logout">
                              <Link className='logout' to={'/admin'}>
                                  <BiLogOut className='infosadmin_icons'/>
                                  <h3>Logout</h3>
                              </Link>

                              <div className="tiret"></div>

                                {/* <Link className='edit' >
                                    <FiEdit className='icons_edit'/>
                                    <h3>Edit Profile</h3>
                                </Link>              */}
                            </div>              
                          </>
                       }
                       {logout &&
                          <>
                              <div className='element_2'>
                                {/* <img src={img1} className='infosadmin_img' alt=''/> */}
                                  <p>Sem elisee</p>
                                  <MdKeyboardArrowDown className='infosadmin_icons_arrow1' onClick={handleClickLogout}/> 
                              </div>       
                          </> 
                       } 
                  </div>      
              </div>

              <div>
                   <h1>Bienvenue dans votre espace</h1>
                   
                   <h2>Changer de mot de passe</h2>
                <form>
                    <div className='input_parametre'>

                        <TextField
                              id="outlined-basic"
                              label="Password"
                              variant="outlined" // Utilisez 'outlined' comme variante
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="emprunt_input"
                         />    

                         <br />

                          <TextField
                              id="outlined-basic"
                              label="Confirm Password"
                              variant="outlined" // Utilisez 'outlined' comme variante
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="emprunt_input"
                         />    

                      </div>
                      <div className="btn">
                        <button>Enregistrer</button>
                      </div> 
                </form>
                  
              </div>
        </div>
    </section>
  )
}

export default Parametre