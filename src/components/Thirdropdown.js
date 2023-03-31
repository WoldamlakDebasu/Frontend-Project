import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Thirdropdown.css";



const Thirdropdown=()=> {

    const [click, setClick]= useState(false);
    const handleClick= ()=> setClick(!click);


    return (
        <>
        <ul onClick={handleClick}
        className={click? "dropdown-menu clicked" : "dropdown-menu"}
        >
       <li>
        <Link to="/ethics" className="dropdown-link" onClick={()=> setClick(false)} >Ethics and Anti-Corruption</Link>
       </li>

       <li>
        <Link to="/gender" className="dropdown-link" onClick={()=> setClick(false)}>Gender</Link>
       </li>

       <li>
        <Link to="/grievance" className="dropdown-link" onClick={()=> setClick(false)}>Grievance Handling</Link>
       </li>

       <li>
        <Link to="/legal" className="dropdown-link" onClick={()=> setClick(false)}>Legal Services</Link>
       </li>

       <li>
        <Link to="/institution" className="dropdown-link" onClick={()=> setClick(false)}>Institutional Development</Link>
       </li>

        </ul>
        </>
    )
}


export default Thirdropdown;


