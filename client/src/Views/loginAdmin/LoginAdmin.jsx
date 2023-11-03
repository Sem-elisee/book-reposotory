import React from 'react'
import './login.scss'
import { useState } from 'react'
import {GrMail} from 'react-icons/gr'
import {HiLockClosed} from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


import axios from 'axios'

import { infos } from '../../redux/slice'

const LoginAdmin = () => {

    const Navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')



  

    const handleAdmin = (e) => {
        e.preventDefault()

        let dataAdmin = {
            email : email,
            mot_de_passe : password
        }

        try{
            axios.post(`http://localhost:8800/api/v1/adminLogin`, dataAdmin)
            .then(res => {
               if(res.status === 200 || res.status === 201){
                  setEmail('')
                  setPassword('')
                  Navigate('/dashboard')
                  alert('Reuissir')
                  
                  console.log(res.data);
               }
            })
            .catch(err => console.error(err));
        }
        catch(e){
          console.log(e);
        }
    }

  return (
    <div className='loginA'>
        <div className="login-title">
        <Fade top>
            <h1>Welcome Gestionnaire</h1>
        </Fade>
        </div>

        <form action="" onSubmit={handleAdmin}>
            <div className="div_form">
                <GrMail className='form_icons'/>
                <input type="text" placeholder='your identifiant'
                value={email} onChange={(e)=> setEmail(e.target.value)} className='form_input'/>
            </div>

            <div className="div_form">
                <HiLockClosed className='form_icons'/>
                <input type="password" placeholder='Password'
                value={password} onChange={(e)=>setPassword(e.target.value)} className='form_input'/>

               
            </div>

            <button className='login_btn'>Se connecter</button>
        </form>

        <div className="box">
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
                <div className='box5'></div>
        </div>
    </div>
  )
}

export default LoginAdmin