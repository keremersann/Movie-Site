import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/movies',
});

export default function AddMovie(){
  const [movie, setMovie] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [language, setLanguage] = useState("");
  const [director, setDirector] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onRatingChange = (e) => setRating(e.target.value);
  const onLanguageChange = (e) => setLanguage(e.target.value);
  const onDirectorChange = (e) => setDirector(e.target.value);

  
useEffect(() => {
    api.get('/').then(res => {
        setMovie(res.data);
    })
}, []);

function createPost() {
    api
      .post("http://localhost:3001/movies",  { title, description, rating, language, director })
      .then((response) => {
        setMovie({ title, description, rating, language, director });
      });
  }

  return (
      <form>
        <label>
          Title:{" "}
          <input type="text" name="title" value={title} onChange={onTitleChange} />
        </label>
        <label>
          Description:{" "}
          <input
            type="text"
            name="description"
            value={description}
            onChange={onDescriptionChange}
          />
        </label>
        <label>
          Director:
          <input
            type="text"
            name="director"
            value={director}
            onChange={onDirectorChange}
          />
        </label>
        <label>
          Movie Language:
          <input
            type="text"
            name="language"
            value={language}
            onChange={onLanguageChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={onRatingChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={createPost}  />
      </form>
  );
};