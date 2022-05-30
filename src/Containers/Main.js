import "../Css/Main.css"
import React from 'react'
import Cardd from "../Components/Cardd"
import data from "../data"

export default function Main(){

let [movieList, setMovieList] = React.useState(data);

const cardElements = movieList.map( (item) => {
    return <Cardd img={item.img} name ={item.name} description ={item.description} rating ={item.rating} language ={item.language} director ={item.director}/>
})

    return (
        <div className = "main">
            <div className = "grid--view">
                {cardElements}
            </div>
        </div>
        
    )
}