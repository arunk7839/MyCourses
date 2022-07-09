import React, { useState, useEffect } from 'react';

import Allcourses from './Allcourses';
import AddCourse from './AddCourse';
import About from './About';

import Header from './Header';
import { Col, Container, Row, Button,ListGroup } from 'reactstrap';
import Menus from './Menus';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link, useMatch, useParams } from 'react-router-dom';

import Login from './user/Login';
import Contact from './Contact';


const Home = () => {


    // const [isSignOut, setIsSignOut] = useState(false);
    //const [signInOrSignUp, setSignInOrSignUp] = useState(false);
    const navigate = useNavigate();

    // useEffect(() => {

    //     console.log("home screen");

    //     setSignInOrSignUp();

    // }, []);

    

    //remove token from local storage
    function logOut(){
        localStorage.removeItem('token');
        return true;
    }

    // function handleLogOut() {

    //     let signOut = logOut();
    //     if (signOut){ 
    //     console.log("sign out: " + localStorage.getItem('token'));
    
    //     navigate("/");
    // }
           
       
    // } 


    const renderData = (
        //<Router>
        <Container>
            {/* <Header /> */}
            <Row className="my-3 mx-3">
            
                <Col  md='4'>

                    <ListGroup>
                    

                        <Link className="list-group-item list-group-item-action" to="" action >Home</Link>
                        <Link className="list-group-item list-group-item-action" to="add-course" action>Add Course</Link>
                        {/* <Link className="list-group-item list-group-item-action" to="view-courses" action>View Courses</Link> */}
                        <Link className="list-group-item list-group-item-action" to="about" action>About</Link>
                        <Link className="list-group-item list-group-item-action" to="contact" action>Contact</Link>
                    </ListGroup>
                    {/* <Button style={{ color: 'white', backgroundColor: '#1a237e', margin: 10 }} onClick={handleLogOut } >
                        SignOut
                    </Button> */}
                </Col>
                <Col md='8' >
                    <Routes>
                        
                            <Route path="" element={<Allcourses />} />
                            <Route path="add-course" element={<AddCourse />} />
                            {/* <Route path="view-courses" element={<Allcourses />} /> */}
                            <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact/>} />
                      

                    </Routes>

                </Col>
            </Row>
        </Container>
        //</Router>
    );

    return (
        <div>
            {/* {isSignOut ? <Login isSignOut={isSignOut}/> : renderData} */}
            {renderData}
        </div>
    );

}



export default Home;