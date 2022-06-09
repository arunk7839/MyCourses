import React, { Fragment, useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import base_url from '../api/bootapi';
import axios from 'axios';

const UpdateCourse = ({ data }) => {

    useEffect(() => {
        document.title = "Update Course";
        console.log("id: "+data.id);
    }, []);

    const [course, setCourse] = useState({});

    //form handler function
    const handleForm = (e) => {

        //setCourse({ ...course, id: data.id });
        //setCourse({id: data.id });
        console.log(course);
        
        updateDataOnServer(course);
        e.preventDefault();

    }

    //creating function to post data on server
    const updateDataOnServer = (data) => {
        axios.put(`${base_url}/courses`, data).then((response) => {
            //console.log(response);
            console.log(response);

        }, (error) => { console.log(error); });

    };


    return (
        <Fragment>
            <h3 className='text-center my-3'>Update Course Detail</h3>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseId">Course Id</Label>
                    <Input defaultValue={data.id} type="text" name="text" id="courseId"
                        placeholder="Enter Course Id here" onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}/>
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
                    <Button type='submit' color='success my-3'>Update Course</Button>

                </Container>
            </Form>

        </Fragment>
    );

}

export default UpdateCourse;