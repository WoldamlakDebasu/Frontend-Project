import React from 'react';
import "./Home.css";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/aauhilton.jpg";
import img4 from "../../images/aauscholar.jpg";
import img5 from "../../images/aaucommunity.jpg";
import img6 from "../../images/aauscholar.jpg";
import img7 from "../../images/academicreco.jpg";
import img8 from "../../images/artefact.jpg";
import {FaFacebook} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import { FaTelegram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


function Home() {
  
  return (
<div className="home">

    <div className="header">
    <div className="article">
      <h1>Lets tell you about AAU</h1>
      <p>Addis Ababa University is a national university located in Addis Ababa, Ethiopia.
         It is the oldest university in Ethiopia. AAU has thirteen campuses. 
         Twelve of these are situated in Addis Ababa, and one is located in Bishoftu, 
         about 45 kilometres away. It is one of the top ten Univeristies in Africa in research and other 
         educational qualifications according to 2022 worldwide rank, and it is the top university in Ethiopia.</p>
    </div>

    <div className="headerimg">
     <img className="image2" src={img2}/>
    </div>
    </div>



<div className="body">
      <div className="description">

        <div className="new1">
          <a href="#">AAU Holds a roundable descussion with MPs 
            on "Policy Coherence for Achieving SDG's in Ethiopia."</a>
          <img src={img3} className="disc-image"/>
          <p>Addis Ababa University (AAU) holds a roundtable 
            discussion on “Policy Coherence for Achieving the 
            Sustainable Development Goals (SDGs) in Ethiopia” with FDRE
             Parliament Standing Committee members at Hilton Addis Hotel...</p>     
         </div>

        <div className="new2">
          <a href="#">Scholars Hold Discussion considering the Annual Nations and Nationalities Day</a>
          <img src={img4} className="scholar-image"/>
          <p>Addis Ababa University (AAU) scholars held a national level discussion, 
            where president of the University attended, in commemoration of Nations 
            and Nationalities Day, which is celebrated every year on ‘HIDAR 29’ in Ethiopia, 
            at Nelson Mandela Hall on December 8, 2022...</p>   
        </div>

        <div className="new3">
          <a href="#">The AAU community conducts a program to take care of seedlings</a>
          <img src={img5} className="community-image"/>
          <p>Addis Ababa University (AAU) held a tree care program involving part of its employees 
            and students from different departments of the Institution on Thursday, December 01, 2022 at Entoto Park...</p>  
        </div>

        <div className="new4">
          <a href="#">AAU Reviews the First Quarter Plan Implementation Report</a>
          <img src={img6} className="plan-image"/>
          <p>Addis Ababa University (AAU) conducted a review on the 2022/3 Fiscal Year first quarter 
            plan implementation report on a meeting held at Eshetu Cholle Hall of the University 
            on the 30th of November 2022...</p>   
        </div>

        <div className="new5">
          <a href="#">Addis Ababa University Grants Academic Recognition</a>
          <img src={img7} className="academic-image"/>
          <p>Addis Ababa University (AAU) recognized the merit of researchers, 
            students and publishers who have registered impactful results in recent years 
            in the University on November 21, 2022...</p>
             
         </div>

        <div className="new6">
          <a href="#">Institute of Ethiopian Studies (IES) Receives Historic Artefacts</a>
          <img src={img8} className="historic-image"/>
          <p>Addis Ababa University (AAU) Institute of Ethiopian Studies received various 
            historical assets gathered under the coordination of the Friends Association
             to the Institute at Ras Mekonnen Hall of the University on the 18th of November 2022...</p>  
         </div>
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


export default Home;














