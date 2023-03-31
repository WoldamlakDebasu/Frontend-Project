import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css';
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Academics from "./components/pages/Academics";
import Admission from "./components/pages/Admission";
import Office from "./components/pages/Office";
import Research from "./components/pages/Research";
import Service from "./components/pages/Service";
import SignUp from "./components/pages/SignUp";
import Undergraduate from "./components/npages/Undergrad";
import Postgraduate from "./components/npages/Postgrad";
import Doctoral from "./components/npages/Doctoral";
import Researchpro from "./components/npages/Researchprograms";
import Undergrad from "./components/mpages/Undergrad";
import Overview from "./components/mpages/Overview";
import Graduate from "./components/mpages/Graduate";
import Contact from "./components/mpages/Contacts";
import Calendar from "./components/mpages/Calendar";
import Announcement from "./components/mpages/Announcement";
import Ethics from "./components/opages/Ethics";
import Gender from "./components/opages/Gender";
import Grievance from "./components/opages/Grievance";
import Institution from "./components/opages/Institution";
import Legal from "./components/opages/Legal";



function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/academics" element={<Academics/>}/>
       <Route path="/admission" element={<Admission/>}/>
       <Route path="/office" element={<Office/>}/>
       <Route path="/research" element={<Research/>}/>
       <Route path="/service" element={<Service/>}/>
       <Route path="/sign-up" element={<SignUp/>}/>
       <Route path="/undergraduate" element={<Undergraduate/>}/>
       <Route path="/postgraduate" element={<Postgraduate/>}/>
       <Route path="/doctoral" element={<Doctoral/>}/>
       <Route path="/research" element={<Research/>}/>
       <Route path="/researchpro" element={<Researchpro/>}/>
       <Route path="/undergrad" element={<Undergrad/>}/>
       <Route path="/postgrad" element={<Graduate/>}/>
       <Route path="/overview" element={<Overview/>}/>
       <Route path="/contacts" element = {<Contact/>}/>
       <Route path= "/calendar" element={<Calendar/>}/>
       <Route path="/announcements" element={<Announcement/>}/>
       <Route path="/ethics" element={<Ethics/>}/>
       <Route path="/gender" element={<Gender/>}/>
       <Route path="/grievance" element={<Grievance/>}/>
       <Route path="/institution" element={<Institution/>}/>
       <Route path="/legal" element={<Legal/>}/>
      </Routes> 
    </Router>
  );
}

export default App;






