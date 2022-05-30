import "../Css/Navbar.css"
import React from 'react'
import {Link} from "react-router-dom"
import {Row, Col} from 'react-bootstrap';


export default function Navbar(){
    return(
        <Row className="navbar">
            <Col xs={6} md={6} lg={2}>
                <img src = "./images/series-logo.webp" alt = "series logo" className = "navbar-logo-image"></img>
            </Col>
            <Col xs={6} md={6} lg={2}>
                <h4 className = "navbar-title">CS391 Final Project - Movie Website</h4>
            </Col>
            <Col xs={6} md={2} lg={2}>
                <Link to="/">
                    <button className = "navbar-button">Main Page</button> 
                </Link>
            </Col>
            <Col xs={6} md={2} lg={2}>
                <Link to="/Team">
                    <button className = "navbar-button">Our Team</button> 
                </Link>
            </Col>
            <Col xs={6} md={2} lg={2}>
                <Link to="/About">
                    <button className = "navbar-button">About Project</button> 
                </Link>
            </Col>
            <Col xs={6} md={2} lg={2}>
                <Link to="/AddMovie">
                    <button className = "navbar-button">Add Movie</button> 
                </Link>
            </Col>
        </Row>
    )
}