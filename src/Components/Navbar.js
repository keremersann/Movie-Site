import React from 'react'

function Navbar()
{
    return(
        <nav>
            <img src = "./images/series-logo.jpg" alt = "series logo" className = "navbar-logo-image"></img>
            <div>
                <ul className = "navbar-unordered-list">
                    <li>Who we are</li>
                    <li>What we do</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <button className = "navbar-add-movie">Add Movie</button>
        </nav>
    )
}

export default Navbar