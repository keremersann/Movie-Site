import React from 'react'
import "../Css/Card.css"
export default function Card(props)
{
console.log(props)
    return (
        <div className = "movie--card">
            <img className = "card--poster" src = "images/bg2.jpg" alt = "movie poster"></img>
            <div className = "card--description--div">
                <h4 className = "card--imdb">{props.imdb}</h4>
                <h4 className = "card--movie--name">{props.name}</h4>
                <h4 className = "card--director">{props.director}</h4>
            </div>
        </div>
    )
}