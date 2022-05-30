import React from 'react'
import "../Css/Card.css"
import { ListGroup, ListGroupItem } from 'react-bootstrap';
export default function Card(props)
{
console.log(props)
    return (
        // <Card style={{ width: '18rem' }}>
        // <Card.Img variant="top" />
        // <Card.Body>
        //     <Card.Title>Ehu</Card.Title>
        //     <Card.Text>Ehu</Card.Text>
        // </Card.Body>
        // <ListGroup className="list-group-flush">
        //     <ListGroupItem>Ehu</ListGroupItem>
        //     <ListGroupItem>Ehu</ListGroupItem>
        //     <ListGroupItem>Ehu</ListGroupItem>
        // </ListGroup>
        // <Card.Body>
        //     <Card.Link href="#">Update Movie</Card.Link>
        //     <Card.Link href="#">Delete Movie</Card.Link>
        // </Card.Body>
        // </Card>

        <div className = "movie--card">
            <img className = "card--poster" src = "images/bg2.jpg" alt = "movie poster"></img>
            <div className = "card--description--div">
                <h4 className = "card--imdb">{props.imdb}</h4>
                <h4 className = "card--movie--name">{props.name}</h4>
                <h4 className = "card--category">{props.category}</h4>
                <h4 className = "card--director">{props.director}</h4>
            </div>
        </div>
    )
}

