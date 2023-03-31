import React from "react";
import "./Overview.css";
import {FaFacebook} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import { FaTelegram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Graduate=()=> {

  return (

<div className="graduate">

<div className="grad-body">

<div className="grad-left">
<h1>Graduate Programs</h1>
 <hr/>
 <p>The provisions of the University Legislation shall also govern matters pertaining to admission to 
    graduate studies including special admission, advance standing and transfer of students.

Admission to graduate programs shall be based on academic results and merits required by the
 academic units for the program. However, in line with the national priority accorded to the
  expansion of higher education, the University in admitting students to most of its graduate 
  programs shall give priority to candidates from public higher education institutions. Accordingly, 
  in the currency of this national priority, the University shall plan, negotiate and decide upon the 
  admission of students to its graduate programs jointly with the Ministry.</p>
<ul>
    <li>Fulfill admission requirements of the curriculum of the specific program</li>
    <li>Pass an entrance exam as determined by the curriculum of the specific program</li>
    <li>Produce an official transcript from the university/college from where they obtained the degree</li>
    <li>Produce the original and copy of degree</li>
    <li>Properly complete the admission application form</li>
    <li>Present proof of payment of the required fee</li>
</ul>
    </div>


<div className="links">

   <div className="link1">
   <h1>QUICK LINKS</h1>
    <ul>
      <li><a href="#">Mail</a></li>
      <li><a href="#">eLearning</a></li>
      <li><a href="#">Staff Profile</a></li>
      <li><a href="#">Colleges</a></li>
      <li><a href="#">Research Institutes</a></li>
      <li><a href="#">Research Office</a></li>
    </ul>
   </div>

   <div className="link2">
   <h1>SYSTEMS</h1>
    <ul>
      <li><a href="#">Portal</a></li>
      <li><a href="#">ICT Helpdesk</a></li>
      <li><a href="#">Traking Issues</a></li>
      <li><a href="#">Research Management</a></li>
    </ul>
   </div>

   <div className="link3">
    <h1>DOWNLOADS</h1>
    <ul>
      <li><a href="#">Registrar</a></li>
      <li><a href="#">Budget and Finance</a></li>
      <li><a href="#">Policies and Legislations</a></li>
      <li><a href="#">Research and Technology Transfer</a></li>
    </ul>
   </div>
</div>
</div>


<div className="footer">

  <div className="foot1">
  <h1>EMERGENCY SERVICES</h1>
  <ul>
    <li><a href="#">Health and Clinics</a></li>
    <li><a href="#">Maintenace</a></li>
    <li><a href="#">Security</a></li>
    <li><a href="#">Student Affairs</a></li>
  </ul>
  </div>

  <div className="foot2">
   <h1>STUDENTS</h1>
  <ul>
    <li><a href="#">Career Development</a></li>
    <li><a href="#">Housing and Dinning</a></li>
    <li><a href="#">Art and Culture</a></li>
    <li><a href="#">Recreation and Sports</a></li>
    <li><a href="#">Cost Sharing</a></li>
    <li><a href="#">Female Students</a></li>
    <li><a href="#">Student Life</a></li>
    <li><a href="#">Student Activities</a></li>
  </ul>
  </div>

  <div className="foot3">
   <h1>CAMPUSES</h1>
   <ul>
    <li><a href="#">CNCS</a></li>
    <li><a href="#">AAIT</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">CHS</a></li>
   </ul>
</div>

  <div className="foot4">
   <h1>CAMPUSES</h1>
   <ul>
    <li><p>Last 7 days Visits: 556,475</p></li>
    <li><p>Last 30 days Visitis: 1,756,978</p></li>
    <li><p>Total Visits: 80,867,857</p></li>
   </ul>
</div>

<div className="foot5">
   <div className="face">
    <a href="#"><FaFacebook/></a>
    </div>

   <div className="tele">
    <a href="#"><FaTelegram/></a>
    </div>

   <div className="twit">
    <a href="#"><FaTwitterSquare/></a>
    </div>

   <div className="link">
    <a href="#"><FaLinkedin/></a>
    </div>

      </div>

    </div>
</div>
    )
}


export default Graduate;





















