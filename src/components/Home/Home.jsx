import React from 'react'
import "./home.scss"
import Navbar from '../Navbar/Navbar'
import {AiOutlineSearch} from "react-icons/ai"

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <h1>KHOJANALYA</h1>
        <div className="search">
            <AiOutlineSearch/>
            <input type="text" placeholder="What you are looking to eat?"/>
        </div>
        <p>Find the best restaurants, cafés and bars near you</p>
    </div>
  )
}

export default Home