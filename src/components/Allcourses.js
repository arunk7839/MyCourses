import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { Toast } from 'bootstrap';


const Allcourses = () => {

    useEffect(() => {
        document.title = "All Courses";
        getAllCoursesFromServer();
    }, []);

    //func to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then((response) => {
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
                <h1 style={{backgroundColor: '#1266F1'}}>All Courses</h1>
                <p>List of courses are as follows: </p>
                {
                    courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />) : "No Courses"
                }

            </div>
            );

}

            export default Allcourses;