import axios from 'axios';
import React, { useState,useEffect } from 'react';

import { Form, FormGroup, Label, Button, Input, Container, Row } from 'reactstrap';
import base_url from '../../api/bootapi';
import { useNavigate } from 'react-router-dom';
import './User.css';
import axiosInstance from '../../axiosInstance';
import './Login.css';
import Toast from 'react-bootstrap/Toast';
import ToastBody from 'react-bootstrap/ToastBody';




function Login() {

    // Add a request interceptor
    axiosInstance.interceptors.request.use(function (config) {
    config.headers.authorization  = `Bearer ${getToken()}`
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
        return Promise.reject(error);
        
    
  });


    // const [isLogin, setIsLogin] = useState(false);
    // const [isRegiter, setIsRegister] = useState(false);
    // const [users, setUsers] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isResponse, setIsResponse] = useState(false);
    


    const navigate = useNavigate();


    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    });

   

    useEffect(() => {

        //console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            loginService(userLogin);
       }
    }, [formErrors]);
    


    function validate(values) {
        const errors = {};
        //const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }else if(values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
       // console.log(errors);
        return errors;

    }


    function handleLogin(event) {
        //Prevent page reload
        event.preventDefault();

        setFormErrors(validate(userLogin));
        setIsSubmit(true);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log("service called...")
    //         loginService(userLogin);
    //    }
        
        


    }


    function loginService(data){
    
        generateToken(data);

    };


    //generating token
    function generateToken(data){
        axios.post(`${base_url}/generate-token`, data).then((response) => {
            console.log("response handle");

            console.log(response);
            console.log(response.data);
            loginUser(response.data.token);
            getCurrentUser();
            setUserLogin({
                username: "",
                password: ""
            });
            setIsError(false);
            setIsResponse(true);
           

        }, (error) => {


            console.log("error",error);
            setErrorMessage(error.response.data.message);
            setIsResponse(false);
            setIsError(true);
            
            //console.log("error: " , error.message + " : "+ error.response.data.error);
            //console.log("error: " , error.response.data.error);
            

        });

    }

     //login user: store token in local storage
    function loginUser(token){
        localStorage.setItem('token',token);
        return true;
    }

    //isLoggedIn:user is login or not
    function isLoggedIn(){
        let tokenStr = localStorage.getItem('token');
        if(tokenStr===undefined || tokenStr==='' || tokenStr===null){
            return false;
        }
        else {
            return true;
        }
       
    }

    //remove token from local storage
    function logOut(){
        localStorage.removeItem('token');
        return true;
    }

    //getToken
    function getToken(){
        return localStorage.getItem('token');

    }

    //setUser in local storage
    function setUser(user){
        localStorage.setItem('user',JSON.stringify(user));
    }

    //getUser from local storage
    function getUser(){
        let userStr = localStorage.getItem('user');
        if(userStr!=null){
            return JSON.parse(userStr);
        }
        else{
            logOut();
            return null;
        }
    }

    //get user role
    function getUserRole(){
      let user =   getUser();
      return user.authorities[0].authority;
    }

    // function setSignInOrSignUp() {
    //     localStorage.setItem('isSignInOrSignUp',true);
    //     //return true;

    // }

    //current user:which is logged in
    function getCurrentUser(){
     axiosInstance.get(`${base_url}/current-user`).then((response)=>{

        setUser(response.data);

        console.log(response);
         console.log(response.data);
         //setIsSubmit(true);

        //(getUserRole()==='NORMAL')? window.location.href= '/home': window.location.href= '/home'
         

         window.location.href = '/home'
         
        // setSignInOrSignUp();

        

    },(error)=>{
        console.log("error: "+error);

    });
    }


  

    function handleInput(e) {
      
        const { name, value } = e.target;
        setUserLogin({ ...userLogin, [name]: value });
    }



    const renderForm = (

        <div className= 'w-50 mx-5 my-3'>
            {/* {isResponse && <div className='ui message success'> User login successfully</div>}
            {isError && <div className='ui message success'> {errorMessage}</div>} */}

        <div className="card cardalign Card " >
            <div className="card-body">

                <h2 className='Header'>LogIn</h2>


                <Form style={{  justifyContent: 'center', alignItems: 'center' }} className=' w-75' onSubmit={handleLogin}>

                    <div className='form-group mx-5 my-4'>
                        <Label for="Username">
                            <i class="zmdi zmdi-account  material-icons-name"></i> Username

                        </Label>
                        <Input
                            id="Username"
                            name="username"
                            placeholder="Enter Username"
                            type="text"
                            autoComplete='off'
                            value={userLogin.username}
                            onChange={handleInput}
                            />
                            <p className='Error'>{ formErrors.username}</p>

                    </div>
                    

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
                            value={userLogin.password}
                            onChange={handleInput}
                            />
                            <p className='Error'>{ formErrors.password}</p>

                    </div>
                    

                    <Container className='w-75 text-center'>
                        <Row md-4>


                            <Button style={{ color: 'white', backgroundColor: '#1a237e', marginTop: 10 }} type='submit'  >
                                LogIn
                            </Button>

                            <Button onClick={() => { navigate("/register") }} style={{ color: 'black', backgroundColor: '#ffffff', marginTop: 10 }} >
                                Don't have account yet? Sign up
                            </Button>

                            {/* <Link to="/register" style={{ color: '#1a237e', marginTop: 10 ,fontSize:17,alignItems:'center'}} >
                                Don't have account yet?Sign up
                            </Link> */}
                        </Row>
                    </Container>
                </Form>

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
                            
                        <i  class="zmdi zmdi-check material-icons-name">  User login successfully </i>

                           
                           
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

            {renderForm}
        </div>
    );

}

export default Login;
