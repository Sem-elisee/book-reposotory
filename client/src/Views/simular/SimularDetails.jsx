import React from 'react'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiMiniUserCircle } from 'react-icons/hi2'
import { Link, useParams } from 'react-router-dom'
import { OeuvreSimular } from '../../constants/RomanData'

export default function SimularDetails() {

    const { name } = useParams();
    const item = OeuvreSimular.find((item) => item.name === name);

    const { image , annees , desc , icons } = item

    const [element, setElement] = useState(true)
    const [show, setShow] = useState(true)


  return (
    <div className='infos'>
    <div className="infos-book">
        <h1><Link to={"/"} className='Title'>FixBook</Link></h1>
        <div className="infosUser">
                <div className='infosUser-users'>
                    <div className='infosUser-icons'>
                        <FiMenu className='icons-menu'/>
                        <HiMiniUserCircle  className='icons-user'/>
                    </div>
                <p>Sem Elisee</p>
            </div>
      </div>  
    </div>
    <section className='infos-roman'>
        <div className='roman1'>
            <div className="infos-infos">
                <h2>{name}</h2>
               <div className='infos-date'>
              
                    <p>{icons}</p>
                    <h3>{annees}</h3>
                </div>
                    <p>{desc}</p>
            
                <div className='roman-button'>
                    <button className='butt1'>Acheter</button>
                    <button className='butt2'>Emprienter</button>
                </div>
        </div>
        </div>

        <div className="roman2">
            <img src={image} alt="" className='rome2-img'/> 
        </div>        
    </section>
</div>
  )
}
