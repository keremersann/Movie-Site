import "../Css/Navbar.css"
import React from 'react'
import {Link} from "react-router-dom"


function Navbar()
{
    return(
        <nav className = "navbar">
            <img src = "./images/series-logo.webp" alt = "series logo" className = "navbar-logo-image"></img>
            <div className = "navbar-content">
                <h4 className = "navbar-title">CS391 Final Project - Movie Website</h4>
                <Link to="/">
                <button className = "navbar-button">Main Page</button> 
                </Link>
                <Link to="/Team">
                <button className = "navbar-button">Our Team</button> 
                </Link>
                <Link to="/Team">
                <button className = "navbar-button">About Project</button> 
                </Link>
                <Link to="/AddMovie">
                <button className = "navbar-button">Add Movie</button> 
                </Link>
            </div>
        </nav>
    )
}

export default Navbar