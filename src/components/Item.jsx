import React from 'react'
import { Card, Button } from 'react-bootstrap'

export function Item(props) {



    return (
        <Card className='mb-3' style={{ width: 300 }}>
            <Card.Img src={props.imgURL} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                {/* <Card.Text>{props.description}</Card.Text> */}
                <Card.Subtitle>{props.price}</Card.Subtitle>
                <Button className='mt-1 btn btn-info btn-sm' onClick={props.handlerOnClick} id={props.id}>Comprar</Button>
            </Card.Body>
        </Card >
    )
}
