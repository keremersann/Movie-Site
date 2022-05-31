import "../Css/Main.css"
import React, {useState, useEffect} from 'react'
import MovieCard from "../Components/MovieCard"
import axios from 'axios';

const baseURL =  `http://localhost:3001/movies`;

export default function Main(){

    const [movieList, setMovieList] = useState(null);
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setMovieList(response.data);
        });
      }, []);

    if (!movieList) return null;

    const cardElements = movieList.map( (item) => {
        return <MovieCard title ={item.title} description ={item.description} rating ={item.rating} language ={item.language} director ={item.director}/>
    })
    
        return (
            <div className = "main">
                <div className = "grid--view">
                    {cardElements}
                </div>
            </div>
            
        )
    }