import React from 'react';
import  './TopBar.css'

import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  NavLink,
  Button, Modal, ModalFooter,
  ModalHeader, ModalBody
   
} from 'reactstrap';
import ProfileModal from './ProfileModal';

//import ProfileModal from './ProfileModal';

export const TopBar = () => {

    // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);

  //const [openModal, setOpenModal] = React.useState(false);

  // Modal open state
  const [modal, setModal] = React.useState(false);
  
  // Toggle for Modal
  const toggle = () => setModal(!modal);


  // const isSignInOrSignUp = localStorage.getItem('isSignInOrSignUp');
  // console.log("isSignInOrSignUp: ",isSignInOrSignUp);

   //isLoggedIn:user is login or not
   function isLoggedIn(){
     let tokenStr = localStorage.getItem('token');
     console.log("tokenStr: "+ tokenStr);
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
  
  function handleSignOut() {
    logOut();
    
  }

  function handleProfile() {
    const user = getUser();
    console.log("user: "+user);
    if (user != null) {

     // console.log("user name: "+user.username);
     // console.log("user email: "+user.email); 
    }
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

  // const ProfileModal = (
  //   <div>
  //     <Modal isOpen={modal} toggle={toggle} animation={false} 
  //     size='sm'
  //     >
    
  //   <ModalHeader
  //       toggle={toggle}>Profile</ModalHeader>
  //   <ModalBody className='text-center'>
  //         <p>{getUser().username}</p>
  //         <p>{getUser().email}</p>
  //   </ModalBody>
  //   <ModalFooter>
  //       <Button color="primary" onClick={toggle}>Ok</Button>
  //   </ModalFooter>
  //     </Modal>
  //     </div> 
      
  // );
  
  const showBeforeLogInOrSignIn = (
    <Nav className="ms-auto  "  navbar>
    <NavItem  className='mx-3'>
      <NavLink  style={{color: 'white', textDecoration: 'none'}} activStyle={{color: 'red', textDecoration: 'none'}} href="/login">LogIn</NavLink>
    </NavItem>
    <NavItem  >
      <NavLink  style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}} href="/register">SignUp</NavLink>
    </NavItem>
  </Nav>
  );

  const showAfterLogInOrSignIn = (
    <Nav className="ms-auto "  navbar>

    <NavItem   className='mx-3' onClick={()=> handleSignOut()}>
      <NavLink  style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}} href="/login">SignOut</NavLink>
    </NavItem>
      {/* <NavItem onClick={toggle}>
      <NavLink  style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}} href="#" >Profile</NavLink>
    </NavItem> */}
       <NavItem >
        <NavLink style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'red', textDecoration: 'none' }}  >{getUser().username}</NavLink>
    </NavItem>
    </Nav>
    );

    return (


      <div  >
      
               
        <Navbar className='Topbar' dark  sticky="top" expand="md">
          
          
                <NavbarBrand className=' text-center' href="/">
                   
                    <i class="zmdi zmdi-codepen zmdi-hc-2x " ></i>
                        <h4>My Courses</h4>
                        
                    </NavbarBrand>
                   
          <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
          <Collapse isOpen={isOpen} navbar>
                       
            {isLoggedIn() ? showAfterLogInOrSignIn : showBeforeLogInOrSignIn}
                 
          </Collapse>
        </Navbar>
        {/* {modal && ProfileModal} */}
      </div>
  
    );
    
}

