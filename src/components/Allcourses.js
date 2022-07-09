import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { Toast } from 'bootstrap';
import '../Course.css';
import axiosInstance from '../axiosInstance';


const Allcourses = () => {

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
        document.title = "All Courses";
        getAllCoursesFromServer();
    }, []);

    //func to call server
    const getAllCoursesFromServer = () => {
        axiosInstance.get(`${base_url}/courses`).then((response) => {
            //console.log(response);
            console.log(response.data);
            setCourse(response.data)



        }, (error) => { console.log(error); });

    };

    //creating function to u[date] data in server
    const updateCourses = (id) => {
        setCourse(courses.filter((c) => c.id != id));

    };

    const [courses, setCourse] = useState([]);

    return (
        
            <div className='text-center my-3'>
                {/* <h1 className='Titlestyle'>All Courses</h1> */}
                {/* <p>List of courses are as follows: </p> */}
                {
                    courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />) : "No Courses"
                }

            </div>
            );

}

            export default Allcourses;