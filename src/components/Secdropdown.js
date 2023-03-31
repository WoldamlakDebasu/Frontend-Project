import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Secdropdown.css";




const Secdropdown= ()=>{

    const [click, setClick] = useState(false);
    const handleClick= ()=> setClick(!click);


    return (
        <>
     <ul onClick={handleClick}
     className={click? "dropdown-menu clicked" : "dropdown-menu"}
     >
        <li>
      <Link to="/overview" className="dropdown-link" onClick={()=> setClick(false)}>Overview</Link>

        </li>

        <li>
      <Link to="/undergrad" className="dropdown-link" onClick={()=> setClick(false)}>Undergraduate</Link>

        </li>

        <li>

      <Link to="/postgrad" className="dropdown-link" onClick={()=> setClick(false)}>Graduate</Link>

        </li>
        <li>
      <Link to="/calendar" className="dropdown-link" onClick={()=> setClick(false)}>Calendar</Link>

        </li>

        <li>
      <Link to="/announcements" className="dropdown-link" onClick={()=> setClick(false)}>Announcements</Link>

        </li>

        <li>
      <Link to="/contacts" className="dropdown-link" onClick={()=> setClick(false)}>Contacts</Link>

        </li>

     </ul>
        </>
    )
}

export default Secdropdown;






