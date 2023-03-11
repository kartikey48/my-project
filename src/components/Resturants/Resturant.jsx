import React from 'react'
import {AiFillStar} from 'react-icons/ai'
const Resturant = (props) => {
  return (
    <div className='resturant'>
        <img src={props.image} alt="" />
        <div className='details'>
            <h3>{props.name}</h3>
            <div className='resturant-parameters'>
              <div className='reviews'>4<AiFillStar/></div>
              <span>250 for two</span>
            </div>
        </div>
        <hr class="hr"/>
        <span className='offer'>50% off if ordered within 1hr</span>
    </div>
  )
}

export default Resturant