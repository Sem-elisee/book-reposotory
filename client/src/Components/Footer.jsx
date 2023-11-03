import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  return (
    <section className='footer'>
        <div className="footer__element">
            <div className="footer__others">
                <p>About</p>
                <p>Jobs</p>
                <p>Press</p>
                <p>News</p>
                <p>Gift</p>
            </div>
            <div className="footer__element">
              <p>Leagal</p>
              <p>Cookies</p>
              <p>AdChoices</p>
            </div>
        </div>
        <div className="footer__network">
          <div className="social__network">
            <Link>Facebook</Link>
            <Link>Twitter</Link>
          </div>     
          <div className='network__date'>
              <p>2007-2014 BookRountable</p>
          </div>
        </div>
    </section>
  )
}

export default Footer