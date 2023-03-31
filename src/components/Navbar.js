import React, {useState} from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import {FaMapMarkerAlt} from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import img from "../images/logo.jpg";
import Secdropdown from "./Secdropdown";
import Thirdropdown from "./Thirdropdown";



function Navbar() {
const [click, setClick] = useState(false);
const [dropdown, setDropdown] = useState(false);
const [secdropdown, setSecdropdown]= useState(false);
const [thirdropdown, setThirdropdown]= useState(false);



const handleClick = () => setClick(!click);
const closeMobileMenu = ()=> setClick(false);


    return ( 
        <div className="fixheader">
       
      <img src={img} className="first-image"/>
        

        <div className="logo-text">
        <h1>SEEK WISDOM, ELEVATE YOUR INTELLECT AND SERVE HUMANITY</h1>
        </div>

        <nav className='navbar'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                AAU
            <FaMapMarkerAlt/>
            </Link>


            <div className='menu-icon' onClick={handleClick}>
             <i className={click? "fas fa-times" : "fas fa-bars"}/>
            </div>


            <ul className={click? "nav-menu active" : "nav-menu"}>

                
                <li className= "nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

               <li className="nav-item"
               onClick={closeMobileMenu}
              >
                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                    About
                    </Link>
               </li>

               <li className="nav-item"
               onMouseEnter={()=>setDropdown(true)}
               onMouseLeave={()=> setDropdown(false)}
               >
                <Link to="/academics"
                className="nav-links"
                onClick={closeMobileMenu}>
                    Academics <i className="fas fa-caret-down"/>
                </Link>

                {dropdown && <Dropdown/>}
               </li>

              <li className="nav-item"
               onMouseEnter={()=> setSecdropdown(true)}
               onMouseLeave={()=> setSecdropdown(false)}
              >
                <Link to="/admission" 
                className="nav-links"
                onClick={closeMobileMenu}>Admission<i className="fas fa-caret-down"/></Link>

                {secdropdown && <Secdropdown/>}
              </li>

              <li className="nav-item">
                <Link to="/service" 
                className="nav-links"
                onClick={closeMobileMenu}>
                Services
                </Link>
              </li>

              <li className="nav-item"
                onMouseEnter={()=> setThirdropdown(true)}
                onMouseLeave={()=> setThirdropdown(false)}
              >

                <Link to="/office" 
                className="nav-links"
                onClick={closeMobileMenu}>
                Office <i className="fas fa-caret-down"/>
                </Link>

                 {thirdropdown && <Thirdropdown/>}
              </li>

              <li className="nav-item">
                <Link to="/research" 
                className="nav-links"
                onClick={closeMobileMenu}>Research</Link>
              </li>

              <li className="nav-item">
                <Link to="/sign-up" 
                className="nav-links-mobile"
                onClick={closeMobileMenu}>Apply Online</Link>
              </li>
            </ul>
           
            <input type="text" placeholder="Search..."/><FaSistrix className="sistrix"/>
        </nav>
        </div>
    )
}


export default Navbar;











