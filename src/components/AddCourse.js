import React, { Fragment, useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import base_url from '../api/bootapi';
import axios from 'axios';
import '../Course.css';
import axiosInstance from '../axiosInstance';

const AddCourse = () => {

     // Add a request interceptor
     axiosInstance.interceptors.request.use(function (config) {
        config.headers.authorization  = `Bearer ${getToken()}`
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
            return Promise.reject(error);
            
        
      });

    //getToken
    function getToken(){
        return localStorage.getItem('token');

    }

    useEffect(() => {
        document.title = "Add Courses";

    }, []);

    const [course, setCourse] = useState({});

    //form handler function
    const handleForm = (e) => {
        console.log(course);
        postDataOnServer(course);
        e.preventDefault();

    }

    //creating function to post data on server
    const postDataOnServer = (data) => {
        axiosInstance.post(`${base_url}/courses`, data).then((response) => {
            //console.log(response);
            console.log(response);

        }, (error) => { console.log(error); });

    };


    return (
        <Fragment>
            <h2 className='text-center my-3 Titlestyle' >Fill Course Detail</h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseId" className='Titlestyle py-2'>Course Id</Label>
                    <Input type="text" name="text" id="courseId" placeholder="Enter Course Id here" onChange={(e) => {
                        setCourse({ ...course, id: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle" className='Titlestyle py-2'>Course Title</Label>
                    <Input type="text" id="courseTitle" placeholder="Enter Course Title here"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }} />
                </FormGroup>
                <FormGroup>
                    <Label for="courseDescription" className='Titlestyle py-2'>Course Description</Label>
                    <Input type="text" id="courseDescription" placeholder="Enter Course Description here" style={{ height: 100 }}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }} />
                </FormGroup>
                <Container className='text-center '>
                    <Button style={{color:'white',backgroundColor:'#1a237e',marginRight:5 }}  type='submit' >Add Course</Button>
                    <Button style={{color:'white',backgroundColor:'#1a237e',marginLeft:5}}  type='reset'>Clear</Button>
                </Container>
            </Form>

        </Fragment>
    );

}

export default AddCourse;