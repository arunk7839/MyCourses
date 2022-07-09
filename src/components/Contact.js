import React from 'react';
import { List } from 'reactstrap';
import '../Course.css';


const Contact=()=>
{
return(
    <div className="my-2">
        
            <h2 className=' my-3 Titlestyle'>Contact</h2>
        <p className='my-3'>Arun Chandravanshi,</p>

        <p>Mob: +91 9980285683 </p>
        <List type="unstyled" >
            <li className='my-2'>LinkedIn Profile : <a href="https://www.linkedin.com/in/arunc1c/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/arunc1c/ </a>
             
            </li> 
           
        </List>
    </div>
);

}

export default Contact;