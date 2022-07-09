import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from 'reactstrap';
import base_url from '../api/bootapi';
import axios from 'axios';
import UpdateCourse from './UpdateCourse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

const Course = ({ course, update }) => {

     // Add a request interceptor
     axiosInstance.interceptors.request.use(function (config) {
        config.headers.authorization  = `Bearer ${getToken()}`
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
            return Promise.reject(error);
            
        
      });
    

    const [show, setShow] = useState(false);

    useEffect(() => {
        // document.title = "Update Course";
        console.log(show);
    }, [show]);


     //getToken
     function getToken(){
        return localStorage.getItem('token');

    }


    //creating function to delete data from server
    const deleteCourse = (id) => {
        axiosInstance.delete(`${base_url}/courses/${id}`).then((response) => {
            //console.log(response);
            console.log(response);
            update(id);

        }, (error) => { console.log(error); });

    };

    //creating function to update data on server
    const updateCourse = () => {

        //console.log("update");
        setShow(true);
        //console.log(show);
        //console.log(course);
    };

    return (

        <div>
            {show
                ? <UpdateCourse data={course} />
                : 
                    <Card className='my-3' style={{backgroundColor: '#f1f1f1'}}>
                        <CardBody>
                            <CardSubtitle >{course.title}</CardSubtitle>
                            <CardText>{course.description}</CardText>
                            <Container >
                                <Button color='danger mx-3' onClick={() => {
                                    deleteCourse(course.id)
                                }}>Delete</Button>
                                <Button color='warning' onClick={() => {
                                    updateCourse()
                                }}>Update</Button>

                            </Container>
                        </CardBody>
                    </Card>
            }
        </div>


    );

}

export default Course;