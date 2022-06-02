import "../Css/Main.css"
import React from 'react'
import {Container} from 'reactstrap'

export default function About() {
    return (
        <Container className = "form-parent-container">
        <h2>How To Use The Website?</h2>
        <div className="grid--view--about">
          <p>This website is designed for you to easily access your movie list.</p>
          <p>Here is how you can use it:</p>
          <p>- You can add and delete any movie that you can think about to this website.</p>
          <p>- Then you can see your list in the main page from the cards.</p>
          <p>- These cards will help you to keep track of your movies and it contains information about your movies such as the director and their IMDB rating.</p>
          <h6>HAVE FUN AND CREATE GOOD LISTS</h6>
        </div>
        </Container>
    );
  }
  

