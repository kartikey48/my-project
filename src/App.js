import React,{useState} from 'react';
import Font from './components/Font';
import Navbar from './components/Navbar';
import "./styles/main.css"
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';
import ImageSlider from './components/ImageSlider';

function App() {
const [results, setResults] = useState([]);


// slider

const slides = [
  { url: "https://www.shutterstock.com/image-vector/indian-food-logo-template-design-600w-1471268339.jpg", title: "indian-food" },
  { url: "https://www.telugutimesnow.com/wp-content/uploads/2021/01/psx_20210129_0133247546713264891347067.jpg", title: "vagina" },
  { url: "https://b.zmtcdn.com/data/pictures/0/3500010/5f740361330dd8008da5851789a07fac.jpg", title: "black pepper" },
  { url: "https://kumarsweetshop.co.in/wp-content/uploads/2022/03/imag_8123-768x512.jpg", title: "Kumar sweet shop" },
  { url: "https://liveon.psu.edu/sites/liveon/files/styles/carousel_popover_crop_w600/public/2021-06/burgerking.jpg?itok=XZQn2pKa", title: "burger king" },
];
const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
};



  return (
    <React.Fragment>
      <Navbar /> 
      
      <div className='map'>
      <iframe style={{width: "100%", height: "600px"}} src="https://maps.google.com/maps?q=india ,pauri&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div>
      <Font />
      <div className='search'>
      <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results}/>
      </div>
      </div>

{/* slider */}
<div className='sliderss'>
<div className='sliders'>
       <h3>Here are some of the famous resturants</h3>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
    </div>

    </React.Fragment>
    
    
  );
}

export default App;
