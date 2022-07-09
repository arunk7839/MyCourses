import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'reactstrap';
import '../Course.css';

const About=()=>
{
return(
    <div className="my-2">
        
            <h2 className=' my-3 Titlestyle'>About</h2>
        <p className='my-3'>Hi my name is Arun Chandravanshi. I'm a passionate software developer and researcher from Bangalore India. </p>
        <List type="unstyled" >
            <li className='my-2'>LinkedIn Profile : <a href="https://www.linkedin.com/in/arunc1c/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/arunc1c/ </a>
             
            </li> 

            <li className='my-2'>Stack Overflow : <a href="https://stackoverflow.com/users/4052916/arun-kumar" target="_blank" rel="noopener noreferrer">
            https://stackoverflow.com/users/4052916/arun-kumar</a>
            </li>

            <li className='my-2'>Github : <a href="https://github.com/arunk7839" target="_blank" rel="noopener noreferrer">
                    https://github.com/arunk7839</a>
            </li>    
           
        </List>
    </div>
);

}

export default About;