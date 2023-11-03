import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.scss'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [username, setusername] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')

  const [emailValide, setemailValide] = useState('')

  const Navigate = useNavigate()

  const register = (e) => {
      e.preventDefault()

      let dataPost = {
        email: email,
        username : username,
        userpassword : password
      }

      try {
         axios.post('http://localhost:8800/api/v1/register', dataPost)
         .then(response => {
           if (response.status === 200 || response.status === 201){
              setemail('')
              setusername("")
              setpassword('')

              Navigate('/loginUser')
           }
         })
         .catch(error => {
          console.error(error)
          setemailValide('erreur du gmail')
         })
      }
      catch(e) {
        console.log(e);
      }
  }


  return (
    <div className='signup'>

        <form className='form' onSubmit={register}> 
            <h1 className="signup-title">Register</h1>
            <div className="form-div">
                <input type="text" placeholder='username' className='form-input'
                value={username} onChange={(e)=> setusername(e.target.value)}/>
            </div>
            
            <div className="form-div">
              
                <input type='email' placeholder='your@email.com'className='form-input'
                value={email} onChange={(e) => setemail(e.target.value)}/>
            </div>
                {emailValide}

            <div className="form-div">
                <input type="password" placeholder='password' className='form-input'
                value={password} onChange={(e) => setpassword(e.target.value)}/>
            </div>

            <button className='signup-button'>Register</button>

            <div className='div-span'>
                <span className='signup-span'>Not a member?<Link to='/loginUser'>Login</Link></span>
            </div>
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

export default SignUp