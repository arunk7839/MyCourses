
import React, { useState, Fragment, useEffect } from 'react';
import { Form, FormGroup, Label, Button, Input, Container, Row } from 'reactstrap';
import Home from '../Home';
import Login from './Login';
import axios from 'axios';
import base_url from '../../api/bootapi';
import './User.css';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastBody from 'react-bootstrap/ToastBody';
import ToastContainer from 'react-bootstrap/ToastContainer';
import axiosInstance from '../../axiosInstance';
import './Login.css';

function Register() {

    //  // Add a request interceptor
    //  axiosInstance.interceptors.request.use(function (config) {
    //     config.headers.authorization  = `Bearer ${getToken()}`
    //     // Do something before request is sent
    //     return config;
    //   }, function (error) {
    //     // Do something with request error
    //         return Promise.reject(error);
            
        
    //   });
    


    const [isRegistered, setIsRegistered] = useState(false);
    const [alreadyRegister, setAlreadyRegiter] = useState(false);
    const [records, setRecords] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isResponse, setIsResponse] = useState(false);

    const [userRegistered, setUserRegistered] = useState({
        username: "",
        email: " ",
        password: "",
        confirmPassword: ""

    });
    const navigate = useNavigate();

    
    // useEffect(() => {

    //     isRegistered && navigate("/login");

    // }, [isRegistered]);


    // function setSignInOrSignUp() {
    //     localStorage.setItem('isSignInOrSignUp',true);
    //     return true;

    // }

    useEffect(() => {

        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            registerService(userRegistered);
           
       }
    }, [formErrors]);


    function handleRegister(event) {
       
        //Prevent page reload
        event.preventDefault();
         //setIsError(true);
        // setIsResponse(true);

        //const newRecord = { ...userRegistered, id: new Date().getTime.toString() }
        //console.log(newRecord);
        //console.log(records);
        //setRecords([...records, newRecord]);

        //console.log(records);

        setFormErrors(validate(userRegistered));
        setIsSubmit(true);
           
        

       // registerService(userRegistered);

        

    }

    //creating function to post data on server
    const registerService = (data) => {
        axios.post(`${base_url}/user/`, data).then((response) => {

            console.log(response);

            setUserRegistered({
                username: "",
                email: " ",
                password: "",
                confirmPassword: ""
            });
            setIsError(false);
            setIsResponse(true);

           window.location.href = '/login'
   

        }, (error) => {
            console.log("error: ",error);
            setErrorMessage( error.response.data.message);
            // setUserRegistered({
            //     username: "",
            //     email: " ",
            //     password: "",
            //     confirmPassword: ""
            // });
            setIsError(true);
            setIsResponse(false);

        });

    };

    function validate(values) {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Email is not valid!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters.";
        }else if(values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters.";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "confirmPassword is required!";
        }
        else if (values.confirmPassword!=values.password) {
            errors.confirmPassword = "confirmPassword is not correct!";
        }

        return errors;

    }

    function handleInput(e) {

        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserRegistered({ ...userRegistered, [name]: value });


    }

    const renderForm = (

        <div className='w-50 mx-5 my-3'>
         

        <div className="card cardalign Card ">
            <div className="card-body">
                <h2 className='Header'>SignUp</h2>


                <Form className=' w-75' onSubmit={handleRegister}>

                    <div className='form-group mx-5 my-4'>
                        <Label for="Username" >
                            <i class="zmdi zmdi-account material-icons-name"></i> UserName

                        </Label>
                        <Input
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                            type="text"
                            value={userRegistered.username}
                            onChange={handleInput}
                            />
                            <p className='Error'>
                                {formErrors.username}</p>
                    </div>

                    <div className='form-group mx-5 my-4'>
                        <Label for="Email">
                            <i class="zmdi zmdi-email material-icons-name"></i> Email

                        </Label>
                        <Input
                            id="Email"
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            autoComplete='off'
                            value={userRegistered.email}
                            onChange={handleInput}
                            />
                             <p className='Error'>{ formErrors.email}</p>

                    </div>

                    {/* <div className='form-group mx-5 my-5'>
                    <Label for="phoneNumber">
                        <i class="zmdi zmdi-phone-in-talk"></i> phoneNumber
                    </Label>
                    <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter phoneNumber"
                        type="number"
                        value={userRegistered.phoneNumber}
                        onChange={handleInput}
                    />
                </div> */}

                    <div className='form-group mx-5 my-4'>
                        <Label for="Password">
                            <i class="zmdi zmdi-lock material-icons-name"></i> Password
                        </Label>
                        <Input
                            id="Password"
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            autoComplete='off'
                            value={userRegistered.password}
                            onChange={handleInput}
                            />
                             <p className='Error'>{ formErrors.password}</p>

                    </div>

                    <div className='form-group mx-5 my-4'>
                        <Label for="confirmPassword">
                            <i class="zmdi zmdi-lock material-icons-name"></i> confirmPassword
                        </Label>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Enter confirmPassword"
                            type="password"
                            autoComplete='off'
                            value={userRegistered.confirmPassword}
                            onChange={handleInput}
                            />
                            
                            <p className='Error'>{ formErrors.confirmPassword}</p>

                    </div>

 
                    <Container className='w-75 text-center'>
                        <Row >


                            <Button style={{ color: 'white', backgroundColor: '#1a237e', marginTop: 10 }} type='submit' >
                                Register
                            </Button>

                            <Button onClick={() => { navigate("/login") }} style={{ color: 'black', backgroundColor: '#ffffff', marginTop: 10 }}  >
                                Already have account? Sign in
                            </Button>
                        </Row>
                    </Container>


                </Form>
                {/* <div>
                    {
                        records.map((element) => {
                            const { id, email, password, userName, confirmPassword } = element;

                            return (
                                <div key={id}>
                                    <p>{userName}</p>
                                    <p>{email}</p>
                                    <p>{password}</p>
                                    <p>{confirmPassword}</p>
                                </div>
                            );
                        })
                    }
                </div> */}


            </div>
            </div>
           <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                   
                  }}>
                {isResponse &&
                <div >
                   
                <Toast className=" bg-success my-3 text-center text-white ">
                        <ToastBody >
                            
                        <i  class="zmdi zmdi-check material-icons-name">  User registered successfully </i>

                           
                           
                        </ToastBody>
                        </Toast>
                   
                </div>
            }
            {isError &&
                <div >
               
                <Toast className=" bg-danger my-3 text-center text-white ">
                            <ToastBody >
                                <i class="zmdi zmdi-block  material-icons-name"> {errorMessage} </i>
                   
                </ToastBody>
                        </Toast>
                       
                </div>
                }
                </div>
                
            </div>

    );

    return (
        <div>
            {/* {isRegistered ? <Home /> : alreadyRegister ? <Login /> : renderForm} */}

            {renderForm}
        </div>
    );

}

export default Register;