import React from 'react'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"

export default function Cardd(props){
console.log(props)
    return (
        <Card style={{ width: "20rem", height: "30rem" }}>
            <Card.Img variant="top" src="images/bg2.jpg" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>IMDB: {props.rating}</ListGroupItem>
                <ListGroupItem>Language: {props.language}</ListGroupItem>
                <ListGroupItem>Director: {props.director}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Update</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>
    )
}

