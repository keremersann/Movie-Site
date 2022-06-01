import React from 'react'
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap"

export default function TeamCards(props){
console.log(props)
    return (
        <Card style={{ width: "15rem", height: "20rem" }}>
            <Card.Img variant="top" src="images/bg2.jpg" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Age: {props.age}</ListGroupItem>
                <ListGroupItem>Occupation: {props.occupation}</ListGroupItem>
                <ListGroupItem>FavouriteMovie: {props.favouriteMovie}</ListGroupItem>
            </ListGroup>
        </Card>
    )
}

