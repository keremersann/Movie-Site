import "../Css/Main.css"
import React, {useState, useEffect} from 'react'
import MovieCard from "../Components/MovieCard"

export default function About() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>About</h2>
        <Container className = "form-parent-container">
        <p>This website is designed for you to easily access your movie list.</p>
        <p>Here is how you can use it:</p>
        <p>- You can add and delete any movie that you can think about to this website.</p>
        <p>- Then you can see your list in the main page from the cards.</p>
        <p>- These cards will help you to keep track of your movies and it contains information about your movies such as the director and their IMDB rating.</p>
        <h6>HAVE FUN AND CREATE GOOD LISTS</h6>
        <div className="grid--view--about">
          MovieCard title ={"TITLE"} description ={"DESCRIPTION"} rating ={"RATING"} language ={"LANGUAGE"} director ={"Director"}
        </div>
        </Container>
      </main> 
    );
  }
  

