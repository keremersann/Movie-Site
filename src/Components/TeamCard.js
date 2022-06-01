import React from 'react'
import {Card, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap"

export default function TeamCards(props){
console.log(props)
    return (
        <Card style={{ width: "15rem", height: "27rem" }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.occupation}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Age: {props.age}</ListGroupItem>
                <ListGroupItem>Favourite Movie: {props.favouriteMovie}</ListGroupItem>
            </ListGroup>
        </Card>
    )
}

