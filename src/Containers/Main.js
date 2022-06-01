import "../Css/Main.css"
import React, {useState, useEffect} from 'react'
import MovieCard from "../Components/MovieCard"
import axios from 'axios';

const baseURL =  `http://localhost:3001/movies`;

export default function Main(){

    const [movieList, setMovieList] = useState([]);
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setMovieList(response.data);
        });
      }, []);

    
    function deleteMovie(id){
          axios.delete(`http://localhost:3001/movies/${id}`).then(
            setMovieList(
              (movieList) => {
                let newMovieListArray = movieList.filter((element) => { return id !== element.id; })
                return newMovieListArray;
              }
            )
          )
    }

    const cardElements = movieList.map( (item) => {
        return <MovieCard key ={item.id} id = {item.id} title ={item.title} description ={item.description} 
        rating ={item.rating} language ={item.language} director ={item.director} handleDelete = {deleteMovie}/>
    })
    
        return (
            <div className = "main">
                <div className = "grid--view">
                    {cardElements}
                </div>
            </div>
            
        )
    }