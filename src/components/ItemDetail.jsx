import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

export function ItemDetail(props) {
    return (
        <Container>
            <Card className='mb-3' style={{ width: 300 }}>
                <Card.Img src={props.imgURL} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    {/* <Card.Text>{props.description}</Card.Text> */}
                    <Card.Subtitle>{props.price}</Card.Subtitle>
                    <Button className='mt-1 btn btn-info btn-sm' id={props.id}>Comprar</Button>
                </Card.Body>
            </Card >
        </Container>
    )
}
