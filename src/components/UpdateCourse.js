import React, { Fragment, useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import base_url from '../api/bootapi';
import axios from 'axios';
import '../Course.css';
import axiosInstance from '../axiosInstance';
import Toast from 'react-bootstrap/Toast';
import ToastBody from 'react-bootstrap/ToastBody';
import Allcourses from './Allcourses';


const UpdateCourse = ({ data }) => {

    // Add a request interceptor
    axiosInstance.interceptors.request.use(function (config) {
        config.headers.authorization  = `Bearer ${getToken()}`
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
            return Promise.reject(error);
            
        
      });

    useEffect(() => {
        document.title = "Update Course";
        console.log("id: " + data.id);
    }, []);

    const [course, setCourse] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);

     //getToken
     function getToken(){
        return localStorage.getItem('token');

    }

    //form handler function
    const handleForm = (e) => {

        e.preventDefault();

        if (course.id == undefined) {
         
            course.id = data.id
           
            console.log("id change");
        }
        if (course.title == undefined) {
            course.title = data.title
            console.log("title change");
        }
        if (course.description == undefined) {
            course.description = data.description
            console.log("description change");
        }
    
        updateDataOnServer(course);

       

    }

    //creating function to post data on server
    const updateDataOnServer = (data) => {
        axiosInstance.put(`${base_url}/courses`, data).then((response) => {
            //console.log(response);
            console.log(response);
            setIsUpdate(true);
            

        }, (error) => { console.log(error); });

    };

    const courseData = (
        <Fragment >
            <div  style={{ backgroundColor: '#f1f1f1' }}>
            <h3 className='p-3 SubTitlestyle'>Update Course Detail</h3>
            <Form className='mx-3 ' onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input defaultValue={data.id} type="text" name="text" id="courseId"
                        placeholder="Enter Course Id here" onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                            console.log(course);
                        }} />
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input defaultValue={data.title} type="text" id="courseTitle" placeholder="Enter Course Title here"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }} />
                </FormGroup>
                <FormGroup>
                    <Label for="courseDescription">Course Description</Label>
                    <Input defaultValue={data.description} type="text" id="courseDescription" placeholder="Enter Course Description here" style={{ height: 100 }}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }} />
                </FormGroup>
                <Container className='text-center'>
                        <Button type='submit' color='primary my-3'>Update Course</Button>
                        {/* {isUpdate &&
                <div >
               
                <Toast className="bg-success my-3 text-center text-white ">
                            <ToastBody >
                                <i class="zmdi zmdi-check  material-icons-name"> Course updated successfully </i>
                   
                </ToastBody>
                        </Toast>
                       
                </div>
                        } */}
                        

                </Container>
            </Form>
            </div>
            
        </Fragment>
    );

    return (
    <div>
            {/* {isUpdate ? <Allcourses /> : courseData} */}
            {courseData}
            </div>
        // <Fragment >
        //     <div  style={{ backgroundColor: '#f1f1f1' }}>
        //     <h3 className='p-3 SubTitlestyle'>Update Course Detail</h3>
        //     <Form className='mx-3 ' onSubmit={handleForm}>
        //         <FormGroup>
        //             <Label for="courseId">Course Id</Label>
        //             <Input defaultValue={data.id} type="text" name="text" id="courseId"
        //                 placeholder="Enter Course Id here" onChange={(e) => {
        //                     setCourse({ ...course, id: e.target.value });
        //                     console.log(course);
        //                 }} />
        //         </FormGroup>
        //         <FormGroup>
        //             <Label for="courseTitle">Course Title</Label>
        //             <Input defaultValue={data.title} type="text" id="courseTitle" placeholder="Enter Course Title here"
        //                 onChange={(e) => {
        //                     setCourse({ ...course, title: e.target.value });
        //                 }} />
        //         </FormGroup>
        //         <FormGroup>
        //             <Label for="courseDescription">Course Description</Label>
        //             <Input defaultValue={data.description} type="text" id="courseDescription" placeholder="Enter Course Description here" style={{ height: 100 }}
        //                 onChange={(e) => {
        //                     setCourse({ ...course, description: e.target.value });
        //                 }} />
        //         </FormGroup>
        //         <Container className='text-center'>
        //                 <Button type='submit' color='primary my-3'>Update Course</Button>
        //                 {/* {isUpdate &&
        //         <div >
               
        //         <Toast className="bg-success my-3 text-center text-white ">
        //                     <ToastBody >
        //                         <i class="zmdi zmdi-check  material-icons-name"> Course updated successfully </i>
                   
        //         </ToastBody>
        //                 </Toast>
                       
        //         </div>
        //                 } */}
                        

        //         </Container>
        //     </Form>
        //     </div>
            
        // </Fragment>
    );

}

export default UpdateCourse;