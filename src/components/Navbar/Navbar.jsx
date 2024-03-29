import {useRef, useState} from "react";
import {FaShoppingBag} from "react-icons/fa";
import "./nav.scss"


function Navbar() {
    const navRef = useRef();

    const showNavbar= () => {
        navRef.current.classList.toggle("responsive_nav");

    }

    const [color, setColor] = useState(false);
    const changecolor = () => {
        if(window.scrollY >= 10){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }

    window.addEventListener('scroll' , changecolor);
    return(
        <section id="navbar" >
            <header className={color ? 'mainnav-bg mainnav':'mainnav' }>
            <h3>KHOJANALYA</h3>
            <nav className='navbar'>
                <a href="#home">Home</a>
                <a href="#dishes">Dishes</a>
                <a href="#resturants">Resturants</a>
                <a href='/signin'>Signin</a>
                <button onClick={showNavbar}>
                    <FaShoppingBag />
                </button>
                
            </nav>
        </header>
        </section>
        
    )

}
export default Navbar ;