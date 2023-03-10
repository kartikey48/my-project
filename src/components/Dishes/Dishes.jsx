import React, { Component } from "react";
import Slider from "react-slick";
import Dish from "./Dish";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './dishes.scss'

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" , textAlign: "center" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleArrow />,
      prevArrow: <SampleArrow />
    };
    return (
      <div className="dishes">
         <div >
        <h2>Items we deilver</h2>
        <Slider {...settings} className='slider'>
          <div>
            <Dish image="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800" name='Pancake'/>
          </div>
          <div>
            <Dish image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name='Pancake'/>
          </div>
          <div>
            <Dish image="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800" name='Pancake'/>
          </div>
          <div>
            <Dish image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name='Pancake'/>
          </div>
          <div>
            <Dish image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name='Pancake'/>
          </div>
          <div>
            <Dish image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name='Pancake'/>
          </div>
        </Slider>
      </div>
      </div>
     
    );
  }
}
