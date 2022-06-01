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
        return <MovieCard key ={item.id} id = {item.id} title ={item.formValues.title} description ={item.formValues.description} 
        rating ={item.formValues.description} language ={item.formValues.description} director ={item.formValues.description} handleDelete = {deleteMovie}/>
    })
    
    
        return (
            <div className = "main">
                <div className = "grid--view--movie">
                    {cardElements}
                </div>
            </div>
            
        )
    }