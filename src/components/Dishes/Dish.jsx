import React from 'react'

const Dish = (props) => {
  return (
    <div className='dish'>
        <img src={props.image} alt="" />
        <span>{props.name}</span>
    </div>
  )
}

export default Dish