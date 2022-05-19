import "../Css/Navbar.css"
import React from 'react'


function Navbar()
{
    return(
        <nav className = "navbar">
            <img src = "./images/series-logo.jpg" alt = "series logo" className = "navbar-logo-image"></img>
            <div className = "navbar-content">
                <h4 className = "navbar-title">CS391 Final Project - Movie Website</h4>
                <ul className = "navbar-unordered-list">
                    <li>Who we are</li>
                    <li>What we do</li>
                    <li>Contact us</li>
                </ul>
                
            </div>
            <button className = "navbar-add-movie-button">Add Movie</button>
        </nav>
    )
}

export default Navbar