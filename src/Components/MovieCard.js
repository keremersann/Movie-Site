import React from 'react'
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap"

export default function MovieCard(props){
    return (
        <Card style={{ width: "20rem", height: "30rem" }}>
            <Card.Img variant="top" src="images/bg2.jpg" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>IMDB: {props.rating}</ListGroupItem>
                <ListGroupItem>Language: {props.language}</ListGroupItem>
                <ListGroupItem>Director: {props.director}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant="primary">Update Movie</Button>{' '}
                <Button variant="danger" onClick = {() => {props.handleDelete(props.id)}}>Delete Movie</Button>
            </Card.Body>
        </Card>
    )
}

