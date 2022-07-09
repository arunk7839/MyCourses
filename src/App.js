
import './App.css';
import React from 'react';
// import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
// import { Col, Container, Row } from 'reactstrap';
// import Menus from './components/Menus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Home from './components/Home';
import About from './components/About';
import { TopBar } from './components/header/TopBar';
import ProfileModal from './components/header/ProfileModal';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      {/* <h1>My Courses</h1> */}
      <TopBar/>
{/* <ProfileModal/> */}
      
      <Router>


        <Routes>

        <Route path="/" element={<h1 >Welcome to My Courses</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} >
            <Route path="home" element={<Allcourses />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="view-courses" element={<Allcourses />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

        </Routes>

      </Router>

    </div>

  );
}

export default App;
