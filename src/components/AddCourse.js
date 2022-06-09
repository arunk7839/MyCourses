import React, { Fragment, useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import base_url from '../api/bootapi';
import axios from 'axios';

const AddCourse = () => {

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
        axios.post(`${base_url}/courses`,data).then((response) => {
            //console.log(response);
            console.log(response);
        
        }, (error) => { console.log(error); });

    };


    return (
        <Fragment>
            <h2 className='text-center my-3'>Fill Course Detail</h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input type="text" name="text" id="courseId" placeholder="Enter Course Id here" onChange={(e) => {
                        setCourse({ ...course, id: e.target.value });
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input type="text" id="courseTitle" placeholder="Enter Course Title here"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }} />
                </FormGroup>
                <FormGroup>
                    <Label for="courseDescription">Course Description</Label>
                    <Input type="text" id="courseDescription" placeholder="Enter Course Description here" style={{ height: 100 }}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }} />
                </FormGroup>
                <Container className='text-center'>
                    <Button type='submit' color='success mx-3'>Add Course</Button>
                    <Button  type='reset' color='warning ' >Clear</Button>
                </Container>
            </Form>

        </Fragment>
    );

}

export default AddCourse;