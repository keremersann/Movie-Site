import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import "../Css/AddMovie.css"

const baseURL = "http://localhost:3001/movies";

export default function AddMovie(){
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [director, setDirector] = useState(null);
  const [rating, setRating] = useState(null);
  const [language, setLanguage] = useState(null);
  

  // initially states shouldn't be null. Hence we should assign empty string to each of them if they are null

  let titleVariable;
  let descriptionVariable;
  let ratingVariable;
  let directorVariable;

  titleVariable = (title === null) ? "" : title;
  descriptionVariable = (description === null) ? "" : description;
  directorVariable = (director === null) ? "" : director;
  ratingVariable = (rating === null) ? "" : rating;
  


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

  function createMovie() {
      axios
        .post(baseURL,  { title, description, rating, language, director })
        .then(() => {
          setMovie({ title, description, rating, language, director });
        });
    }

  return (
    <Container className = "form-parent-container">
      <h2>Movie Form</h2>
    <Form className = "form-container">
        <FormGroup row>
          <Label for="title" sm={2} className = "form-label">Title</Label>
          <Col sm={10}>
          <Input type="text" name="title" id="title" value={titleVariable} onChange={onTitleChange} placeholder="Enter Title" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2} className = "form-label">Description</Label>
          <Col sm={10}>
          <Input type="textarea" name="description" id="description"  value={descriptionVariable}
            onChange={onDescriptionChange} placeholder="Enter Movie Description" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="director" sm={2} className = "form-label">Director</Label>
          <Col sm={10}>
          <Input type="text" name="director" id="director" value={directorVariable}
            onChange={onDirectorChange} placeholder="Enter Director"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="rating" sm={2} className = "form-label">Rating</Label>
          <Col sm={10}>
          <Input type="number" name="rating" id="rating" value={ratingVariable}
            onChange={onRatingChange} placeholder='Enter Rating'/>
          </Col>
        </FormGroup>

        <FormGroup tag="fieldset"  row>
          <legend className="col-form-label col-sm-2 form-label">Language</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="language" value = "Turkish" onChange={onLanguageChange}/>{' '}
                Turkish
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="language" value = "English" onChange={onLanguageChange}/>{' '}
                English
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="language" value = "French" onChange={onLanguageChange}/>{' '}
                French
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="language" value = "German" onChange={onLanguageChange}/>{' '}
                German
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <Button type = "submit"onClick={createMovie}>Add Movie</Button>
      </Form>
      </Container>
  );
};