import React from "react";
import "./Overview.css";
import {FaFacebook} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import { FaTelegram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Announcement=()=> {
    return (

<div className="announcement">

    <div className="announce-body">
    <div className="announce-left">
     <h1>QUICK LINKS</h1>
      <ul className='lislink'>
        <li><a href="#">Apply for Admission</a></li>
        <li><a href="#">Upload Documents</a></li>
        <li><a href="#">Upload Receipt</a></li>
        <li><a href="#">Official Tracking</a></li>
        <li><a href="#">Special Transfer</a></li>
        <li><a href="#">Staff Transfer</a></li>
      </ul>
     </div>


   <div className="announce-right">
      <h1>Active Application Periods/Announcements</h1>
      <hr/>
      <h2>1.All Students of Addis Ababa University</h2>
       <h3>Admission Calendar: 2022/23 - Semester One</h3>
       <a href="#">See Detail</a>

      <h2>2.Online Registration Procedure for First Year Graduate Students(Regular and Extenstion)</h2>
       <h3>Admission Calendar: 2022/23 - Semester One</h3>
       <a href="#">See Detail</a>
      <h2>3.2022/23 Academic year admission for masters in mineral engineering Regular Programs</h2>
       <h3>Admission Calendar: 2022/23 - Semester One</h3>
       <a href="#">See Detail</a>
      <h2>4.Online Registration Procedure for First Year Graduate Students(Regular and Extension)</h2>
       <h3>Admission Calendar: 2022/23 - Semester One</h3>
       <a href="#">See Detail</a>
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



export default Announcement;











