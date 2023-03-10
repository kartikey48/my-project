import React from 'react'
import './resturants.scss'
import Resturant from './Resturant'

const Resturants = () => {
  return (
    <div className='resturants-container'>
        <h2>Popular resturants around you</h2>
        <div className="resturants">
        <Resturant 
        image="https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&w=800"
        name= "Rana ka Dhaba"
        />
        <Resturant 
        image="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=800"
        name= "Rana ka Dhaba"
        />
        <Resturant 
        image="https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name= "Rana ka Dhaba"
        />
        <Resturant 
        image="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800"
        name= "Rana ka Dhaba"
        />
        <Resturant 
        image="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=800"
        name= "Rana ka Dhaba"
        />
        </div>
        
    </div>
  )
}

export default Resturants