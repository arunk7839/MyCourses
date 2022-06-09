import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";


const Menus = () => {
    return (

        <ListGroup>
            <Link className="list-group-item list-group-item-action" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" to="/add-course" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" to="/view-courses" action>View Courses</Link>
            <Link className="list-group-item list-group-item-action" to="/#!" action>About</Link>
            <Link className="list-group-item list-group-item-action" to="/#!" action>Contact</Link>

        </ListGroup>
    );

}

export default Menus;
