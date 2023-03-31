import React from "react";
import "./Overview.css";
import {FaFacebook} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import { FaTelegram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Calendar=()=> {
    return (
 <div className="calendar">

<div className="cal-body">
<div className="cal-left">
<h1>Academic Calendar</h1>
<hr/>
<p>For regular and extension students, the University follows a two-semester calendar of sixteen weeks of classes each. 
    The school of Medicine may use a system of annual instead of semester course offerings. 
    The summer education programs have a term system. The calendar for each year is prepared by the 
    University Registrar and approved by the University Senate. Regular undergraduate programs are run usually 
    from the second week of every September to the end of June, except for prospective graduates who stay a bit 
    late in campus until they graduate.
    Summer programs usually commence in mid-July and run through September.
    Graduate education is offered from November to around mid-July; with first enrollments preceded by preparatory training 
    of candidates in language and computational skills and research methodology – aimed at improving quality of graduate
    education.</p>
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


export default Calendar;






















