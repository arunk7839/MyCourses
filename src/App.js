
import './App.css';
import React from 'react';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import { Col, Container, Row } from 'reactstrap';
import Menus from './components/Menus';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';



function App() {
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-courses" element={<Allcourses />} />
              </Routes>

            </Col>
          </Row>
        </Container>
      </Router>
    </div>

  );
}

export default App;
