import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:3001/movies";

export default function AddMovie(){
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [rating, setRating] = useState(null);
  const [language, setLanguage] = useState(null);
  const [director, setDirector] = useState(null);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onRatingChange = (e) => setRating(e.target.value);
  const onLanguageChange = (e) => setLanguage(e.target.value);
  const onDirectorChange = (e) => setDirector(e.target.value);

  
  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setMovie(response.data);
    });
  }, []);

  function createPost() {
      axios
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