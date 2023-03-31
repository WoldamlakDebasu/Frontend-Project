import React, {useState} from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";



function Dropdown() {

    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);


    return (
        <>
        <ul
        onClick={handleClick}
        className={click? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
     <li>
        <Link to="/undergraduate" className="dropdown-link" onClick={()=> setClick(false)}>Undergraduate Programs</Link>
     
     </li>


     <li>
        <Link to="/postgraduate" className="dropdown-link" onClick={()=> setClick(false)}>Postgraduate Programs</Link>
     
     </li>


     <li>
        <Link to="/doctoral" className="dropdown-link" onClick={()=> setClick(false)}>Doctoral Programs</Link>
    
     </li>


     <li>
        <Link to="/researchpro" className="dropdown-link" onClick={()=> setClick(false)}>Research Programs</Link>
     
     </li>

        </ul>
        </>
    )
}

export default Dropdown;


