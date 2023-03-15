import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import './footer.scss'
const Footer = () => {
    var year = new Date().getFullYear();
  return (
    <div className='footer'>
        <h2>KHOJANALYA</h2>
        <div className="links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Resturants</a>
            <a href="/">Contact</a>
        </div>
        <div className="socials">
            <a href="/"><AiFillInstagram/></a>
            <a href="/"><BsTwitter/></a>
            <a href="/"><BsFacebook/></a>
        </div>
        <span>Copyright © Khojanalya {year}</span>
    </div>
  )
}

export default Footer