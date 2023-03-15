import React from 'react';
import Home from '../components/Home/Home';
import Dishes from '../components/Dishes/Dishes';
import Resturants from '../components/Resturants/Resturants';
import Footer from '../components/Footer/Footer';


const Homepage = () => {
  return (
    <div>
        <Home/>
        <Dishes/>
        <Resturants/>
        <Footer/>
    </div>
  )
}

export default Homepage