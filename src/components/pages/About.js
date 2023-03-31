import React from 'react';
import "./About.css";
import img9 from "../../images/abutaau.jpg";
import img10 from "../../images/aaugra.jpg";
import img11 from "../../images/newimg.jpg";
import img12 from "../../images/student.jpg";
import {FaFacebook} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import { FaTelegram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


function About() {
  return (
    <div className="about">
<div className="aboutaau">

  <div className="leftr1">
  <div className="left1">
   <h1>For prospective Students</h1>
   <h3>Welcome to Addis Ababa Univeristy! </h3>
   <p>Addis Ababa University is proud to offer more than 50 degree programs fully taught in English 
    including Undergraduate, Masters and Phd/ Doctoral Programs.
   </p>
   </div>
   
   <div className="right1">
  <img src={img11} />
   </div>
</div>

  <div className="leftr2">
  <div className="left2">
   <img src={img9} />
   </div>

   <div className="right2">
   <p>
    <h1>For Current Students!</h1>
    Congratulations for Choosing AAU for your studies!
    Getting to know new people and places is an exciting experience and open new horizons that will have great impact on the future.
    you will find all the necessary information that helps you with your studies and your life in Addis Ababa university.
  </p>
  </div>
 </div>

<div className="leftr3">
  <div className="left3">
  <p>
  <h1>About AAU</h1>
 With a student body of about 10,000 AAU is one of the largest institutions of higher Education in Ethiopia today. 
 Ethiopia is located in the horn of africa with 100 million Peoples with 6 nighbours and one of the longest histories of 
 african continent with a statehood of over 1000 years.</p>
  </div>

  <div className="right3">
  <img src={img10} className="img11"/>
  </div>
</div>

</div>


  <div className="bodabout">

<div className="paragraph">
  <h1>AAU AT GLANCE</h1>
<p>
Addis Ababa University (AAU), which was established in 1950 as the University College 
f Addis Ababa (UCAA), is the oldest and the largest higher learning and research institution 
in Ethiopia. Since its inception, the University has been the leading center in teaching-learning,
 research and community services.

Beginning with enrollment capacity of 33 students in 1950, AAU now has 47,610 students (29,872 
undergraduate, 15,398 Master’s and 2,340 PhD students) and 8,709 staff (3,110 academics, 4,346 admin
 support staff and 1253 health Professionals). In its 14 campuses, the University runs 70 undergraduate 
 and 293 graduate programs (72 PhD and 221 Masters), and various specializations in Health Sciences.

Over 222,000 students have graduated from AAU since its establishment.

The University is led by a President who is assisted by four Vice Presidents and one Executive Director:
 Academic Vice President, Vice President for Research and Technology Transfer, Vice President for
  Administration and Student Services, Vice President for Institutional Development and the Executive Director
   of the College of Health Sciences (with the rank of Vice President).

In recent years, the University has been undertaking various reform schemes in order to cope with and 
respond to the fast-changing national and international educational dynamics. At present the University 
has 10 colleges, 4 institutes that run both teaching and research, and 6 research institutes that 
predominantly conduct research. Within these academic units, there are 55 departments, 12 centers,
 12 schools, and 2 teaching hospitals. The University has the following academic units:</p>
 <h1>Mission and Vision</h1>
 <p>
  <h1>Mission</h1>

Addis Ababa University’s mission is to produce competent graduates, 
provide need-based community service and produce problem-solving research
 outputs through innovative and creative education, research and consultancy 
 service to foster social and economic development of the country.

 <h1>Vision</h1>

Addis Ababa University aspires to be ranked among the top ten pre-eminent African
 graduate and research universities in 2023.

Values

Addis Ababa University is guided by the following core values/principles.

Academic Freedom: The University upholds academic freedom as its core value whereby all its
 communities exercise the right to free expression of ideas and scholarship.
Excellence: The University upholds excellence as the ruling standard in teaching,
 research, community service and scholarship, and commits itself to the attainment
  of the highest standards in academic performance.
Integrity and Honesty: The University promotes honesty, integrity, ethical conduct,
 justice, fairness, and nurtures a culture of teamwork, collegiality and mutual support 
 among members of the University community.
Celebrating diversity: The University promotes and honors commonalities and differences in culture, 
ideas, religion, language, ethnic identity; upholds the principle of gender equality and acknowledges 
the vital role of every member of the community
Reliance on Evidence and Authority of Reason: Pronouncement and undertakings of the University
 shall be founded on reason and evidence.
Student-centeredness: The University is committed to providing an academically challenging and
 supportive learning environment that motivates students to be actively engaged in their own learning, 
 decision making, and governance.
Intolerance to corruption: The University promotes ethical conduct and fights corruption at individual, 
collective, and institutional levels and inculcates anti-corruption thinking and actions (including time 
on duty) among the University community.
Transparency and Accountability: The University is committed to ensure accountability at institutional, 
group, and individual levels in an effort to implement its functions by openly displaying its scholarly
ideas and works to the society.
Entrepreneurial spirit: The University upholds and inculcates the spirit of entrepreneurship among its 
community.</p>
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

export default About;