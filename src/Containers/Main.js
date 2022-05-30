import "../Css/Main.css"
import React from 'react'
import Card from "../Components/Card"
import data from "../data"

function Main()
{

let [movieList, setMovieList] = React.useState(data);

const cardElements = movieList.map( (item) => {
    return <Card img={item.img} name = {item.name} imdb = {item.imdb} category = {item.category} director = {item.director}/>
})

    return (
        <div className = "main">
            <div className = "grid--view">
                {cardElements}
            </div>
           
        </div>
        
    )
}

export default Main