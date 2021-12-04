import { React, useState, useContext } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { CartContext } from './Context/cartContext'

export function ItemDetail(props) {

    const [count, setCount] = useState(0)
    const { cartList, agregarProducto } = useContext(CartContext)

    function onAdd(cant) {
        setCount(cant)
        agregarProducto(props)
        console.log(cartList)
    }



    return (
        <Container>
            <Card className='mb-3' style={{ width: 300 }}>
                <Card.Img src={props.imgURL} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    {/* <Card.Text>{props.description}</Card.Text> */}
                    <Card.Subtitle>{props.price}</Card.Subtitle>
                    <Button className='mt-1 btn btn-info btn-sm' id={props.id} onClick={() => onAdd(1)}>Agregar al Carrito</Button>
                </Card.Body>
            </Card >
        </Container>
    )
}
