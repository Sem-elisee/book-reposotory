import React from 'react'
import { Link } from 'react-router-dom'
import './loginUser.scss'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux'

import { infos } from '../../redux/slice'
// import {infos} from '../'


const LoginUser = () => {

  const [email, setemail] = useState('')
  const [password,setpassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const dispath = useDispatch()

  const Navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlesubmit = (e) => {
      e.preventDefault()

      let dataPost = {
        email : email,
        userpassword : password
      }

      try{
          axios.post('http://localhost:8800/api/v1/login', dataPost)
          .then(res => {
             if(res.status === 200 || res.status === 201){
                setemail('')
                setpassword('')
                Navigate('/comedy')
                alert('Reuissir')

                dispath(infos(res.data))

                console.log(res.data)

                
             }
          })
          .catch(err => console.error(err));
      }
      catch(e){
        console.log(e);
      }
  }


  return (
    <div className='login'>
      <form className='form' onSubmit={handlesubmit}>
          <h1 className="login-title">Login</h1>
          <div className="form-div">
              <input type="text" placeholder='your@email.com' className='form-input'
              value={email} onChange={(e)=> setemail(e.target.value)}/>
          </div>
          
          <div className="form-div">
              <input 
              type={showPassword ? 'text' : 'password'}
               placeholder='password' className='form-input'
              value={password} onChange={(e) => setpassword(e.target.value)}
              />
                  {showPassword ? (
              <RiEyeOffLine onClick={togglePasswordVisibility} className='oeil'/>
            ) : (
              <RiEyeLine onClick={togglePasswordVisibility} className='oeil'/>
            )}
               
          </div>

          <button className='login-button'>Login</button>

          <div className='div-span'>
        <span className='login-span'>Don't have an account? <Link to='/signUp'>Sign Up</Link> </span>
    </div>
          {/* onClick={() => dispath(infos(res.data))} */}

    </form>

    

    <div className="tiret"></div>
    <div className="tiret1"></div>
    <div className="tiret2"></div>
    <div className="tiret3"></div>
    <div className="tiret4"></div>
    <div className="tiret5"></div>
</div>
  )
}

export default LoginUser