import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import "../Css/AddMovie.css"
import "../Css/FormValidations.css"

const baseURL = "http://localhost:3001/movies";

export default function AddMovie(){
  
  const initialValues = {
    title: "", 
    description: "", 
    director: "", 
    rating: "", 
    language: ""}

  const[formValues, setFormValues] = useState(initialValues);
  const[formErrors, setFormErrors] = useState({});
  const[isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const {name , value} = event.target;
    setFormValues({...formValues , [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {};
    
    if(!values.title){
      errors.title = "Title is required"
    }else if(values.title.length > 60)
    {
    errors.title = "Title can not exceed 60 characters!"
    }

    if(!values.description){
      errors.description = "Description is required!"
    }

    if(!values.director){
      errors.director = "Director is required!"
    }

    if(!values.rating){
      errors.rating = "Rating is required!"
    }else if(values.rating < 0){
      errors.rating = "Rating should be positive!"
    }else if(values.rating > 10){
      errors.rating = "Rating should be between 1-10 (boundaries are included)!";
    }

    if(!values.language){
      errors.language = "Language is required!"
    }
    return errors
  }

  useEffect( () => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit)
    {
      console.log(formValues)
      axios
        .post(baseURL, {formValues})
        .then((response) => {
          console.log(response)
        })
        .catch( (error) => {
          console.log(error)
        });
    }
  },[formErrors])

  return (
    <Container className = "form-parent-container">

      {(Object.keys(formErrors).length === 0 && isSubmit) ?
      <Alert color="success">
      Movie is added sucessfully!
      </Alert> :<div></div>}

      <h2>Movie Form</h2>

    <Form className = "form-container" onSubmit = {handleSubmit}>
        <FormGroup row>
          <Label for="title" sm={2} className = "form-label">Title</Label>
          <Col sm={10}>
          <Input type="text" name="title" id="title" value={formValues.title} onChange={handleChange} placeholder="Enter Title" />
          </Col>
        </FormGroup>

        <p className = "formValidations">{formErrors.title}</p>

        <FormGroup row>
          <Label for="description" sm={2} className = "form-label">Description</Label>
          <Col sm={10}>
          <Input type="textarea" name="description" id="description"  value={formValues.description}
            onChange={handleChange} placeholder="Enter Movie Description" />
          </Col>
        </FormGroup>

        <p className = "formValidations">{formErrors.description}</p>

        <FormGroup row>
          <Label for="director" sm={2} className = "form-label">Director</Label>
          <Col sm={10}>
          <Input type="text" name="director" id="director" value={formValues.director}
            onChange={handleChange} placeholder="Enter Director"/>
          </Col>
        </FormGroup>

        <p className = "formValidations">{formErrors.director}</p>

        <FormGroup row>
          <Label for="rating" sm={2} className = "form-label">Rating</Label>
          <Col sm={10}>
          <Input type="number" name="rating" id="rating" value={formValues.rating}
            onChange={handleChange} placeholder='Enter Rating'/>
          </Col>
        </FormGroup>

        <p className = "formValidations">{formErrors.rating}</p>

        <FormGroup tag="fieldset"  row>
          <legend className="col-form-label col-sm-2 form-label">Language</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="language" value = "Turkish" onChange={handleChange}/>{' '}
                Turkish
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="language" value = "English" onChange={handleChange}/>{' '}
                English
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="language" value = "French" onChange={handleChange}/>{' '}
                French
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="language" value = "German" onChange={handleChange}/>{' '}
                German
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>

        <p className = "formValidations">{formErrors.language}</p>
        <Button type = "submit" >Add Movie</Button>
      </Form>
      </Container>
  );
};