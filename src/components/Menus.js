import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useMatch,
    Link
  } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";


const Menus = () => {

    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useMatch();

    return (

        <ListGroup>
            <Link className="list-group-item list-group-item-action" to={`${url}/info`} action >Home</Link>
            <Link className="list-group-item list-group-item-action" to={`${url}/add-course`} action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" to={`${url}/view-courses`} action>View Courses</Link>
            <Link className="list-group-item list-group-item-action" to={`${url}/about`} action>About</Link>
            <Link className="list-group-item list-group-item-action" to={`${url}/contact`} action>Contact</Link>


        </ListGroup>
    );

}

export default Menus;
